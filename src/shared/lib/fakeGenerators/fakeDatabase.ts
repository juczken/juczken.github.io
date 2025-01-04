const fakeDatabase = {
  users: new Map<
    string,
    { id: string; username: string; password: string; email: string; about: string; isAdmin: boolean; token: string }
  >(),
  tokens: new Set<string>(),
};

fakeDatabase.users.set('e4757c52-20a3-47cf-8b0c-f9a6903e1926', {
  id: 'e4757c52-20a3-47cf-8b0c-f9a6903e1926',
  email: 'user1@example.com',
  username: 'user1',
  about: 'About user1',
  password: 'password1',
  token: 'bcfd6af1-d2c6-4772-8f61-3bb9adb6c49c',
  isAdmin: true,
});
fakeDatabase.tokens.add('token123');

export default fakeDatabase;
