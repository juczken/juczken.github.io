import { v4 as uuidv4 } from 'uuid';

export const createRandomProduct = (createdAt: string): Product => {
  const id = getRandomId();
  const category = getRandomCategory();
  const price = getRandom(10, 1000, 2);

  return {
    id: id,
    name: `Продукт ${id}`,
    photo: `https://dummyimage.com/500x500/cccccc/000000&text=Lorem+ipsum+${id}`,
    // photo: `https://via.placeholder.com/500.png?text=Lorem+ipsum+${id}`,
    // photo: `store/photos/products/${id}.jpeg`,
    createdAt: createdAt,
    category: category,
    price: price,
    oldPrice: Math.random() < 0.5 ? price + Math.trunc(100 * price * getRandom(-0.2, 0.2, 2)) / 100 : undefined,
    desc: Math.random() < 0.5 ? `Это ${category.name.toLowerCase()}.` : undefined,
  };
};

export const createRandomOperation = (createdAt: string): Operation => {
  const id = getRandomId();
  const category = getRandomCategory();
  const type = Math.random() < 0.5 ? 'Cost' : 'Profit';
  return {
    id: id,
    name: `Операция ${id}`,
    createdAt: createdAt,
    category: category,
    amount: getRandom(10, 1000, 2) * (type === 'Cost' ? -1 : 1),
    desc: Math.random() < 0.5 ? `Операция ${type} id(${id}).` : undefined,
    type: type,
  };
};

const getRandomId = (): string => {
  return uuidv4();
};

export const getRandomDate = (start: Date, end: Date) => {
  const date = new Date(+start + Math.random() * (end.getTime() - start.getTime()));
  const hour = Math.floor(Math.random() * 24);
  const minute = hour === 0 ? 1 : Math.floor(Math.random() * 60);
  date.setHours(hour);
  date.setMinutes(minute);
  return date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

const getRandom = (min: number, max: number, digits: number): number => {
  return Math.round((min + Math.random() * (max - min)) * 10 ** digits) / 10 ** digits;
};

const categories: Category[] = [
  {
    id: '1',
    name: 'Прям вот очень нужное',
  },
  {
    id: '2',
    name: 'Не так, что бы нужное',
    photo: 'store/photos/categories/2.jpeg',
  },
  {
    id: '3',
    name: 'Совсем выбрось',
    photo: 'store/photos/categories/3.jpeg',
  },
  {
    id: '4',
    name: 'Необходимое',
  },
  {
    id: '5',
    name: 'Вроде некуда, а жаль',
  },
];

const getRandomCategory = (): Category => {
  return categories[Math.trunc(Math.random() * categories.length)];
};

export const getCategories = (): Category[] => {
  return categories;
};

export const getAuth = (): string => {
  return uuidv4();
};

// export const fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
//   return Promise.resolve(new Response());
// }

import fakeDatabase from './fakeDatabase';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetch = async (url: string, options: RequestInit) => {
  await delay(500);

  const { method, body } = options;
  const data = body ? JSON.parse(body.toString()) : ({} as any);

  if (url.endsWith('/signin') && method === 'POST') {
    const user = [...fakeDatabase.users.values()].find((u) => u.email === data.email && u.password === data.password);

    if (!user) {
      return { ok: false, status: 401, json: async () => ({ message: 'Invalid credentials' }) };
    }

    fakeDatabase.tokens.add(user.token);
    return {
      ok: true,
      status: 200,
      json: async () => ({
        user: { id: user.id, name: user.username, about: user.about, email: user.email, isAdmin: user.isAdmin },
        token: user.token,
      }),
    };
  }

  if (url.endsWith('/signup') && method === 'POST') {
    const existingUser = [...fakeDatabase.users.values()].find((u) => u.email === data.email);

    if (existingUser) {
      return { ok: false, status: 409, json: async () => ({ message: 'User already exists' }) };
    }

    const newUser = {
      id: getRandomId(),
      username: data.username,
      password: data.password,
      email: data.email,
      about: data.about,
      token: getRandomId(),
      isAdmin: false,
    };

    fakeDatabase.users.set(newUser.id, newUser);
    fakeDatabase.tokens.add(newUser.token);

    return {
      ok: true,
      status: 201,
      json: async () => ({
        user: {
          id: newUser.id,
          name: newUser.username,
          about: newUser.about,
          email: newUser.email,
          isAdmin: newUser.isAdmin,
        },
        token: newUser.token,
      }),
    };
  }

  if (url.endsWith('/signout') && method === 'POST') {
    const token = data.token;
    fakeDatabase.tokens.delete(token);
    return { ok: true, status: 200, json: async () => ({} as any) };
  }

  if (url.endsWith('/verify') && method === 'POST') {
    const token = data.token;
    if (!fakeDatabase.tokens.has(token)) {
      return { ok: false, status: 401, json: async () => ({ message: 'Invalid token' }) };
    }

    const user = [...fakeDatabase.users.values()].find((u) => u.token === token);
    if (!user) {
      return { ok: false, status: 401, json: async () => ({ message: 'Invalid token' }) };
    }

    return {
      ok: true,
      status: 200,
      json: async () => ({
        user: { id: user.id, name: user.username, about: user.about, email: user.email, isAdmin: user.isAdmin },
        token: user.token,
      }),
    };
  }

  return { ok: false, status: 404, json: async () => ({ message: 'Not found' }) };
};
