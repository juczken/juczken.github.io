import { store } from '../../../app/store/store'; // Импорт стора из файла store.ts
import { TOKEN_KEY } from '../../../shared/lib/localStorage';
import { signin, signout } from './thunks'; // Экспортируемый logout-редьюсер из authSlice

export const setupAuthSync = () => {
  window.addEventListener('storage', (event) => {
    if (event.key === TOKEN_KEY) {
      if (event.newValue) {
        store.dispatch(signin({ token: event.newValue }));
      } else {
        store.dispatch(signout());
      }
    }
  });
};
