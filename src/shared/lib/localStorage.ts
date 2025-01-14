export const TOKEN_KEY = 'auth_token';

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  console.log('getTokenFromLocalStorage', token);
  return token;
};

export const saveTokenToLocalStorage = (token: string) => {
  console.log('saveTokenToLocalStorage', token);
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeTokenFromLocalStorage = () => {
  console.log('removeTokenFromLocalStorage');
  localStorage.removeItem(TOKEN_KEY);
};
