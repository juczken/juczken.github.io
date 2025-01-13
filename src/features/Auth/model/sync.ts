// import { useGetProfileWithSync } from 'src/entities/User/model/api';
import { store } from '../../../app/store/store'; // Импорт стора из файла store.ts
import { getTokenFromLocalStorage, TOKEN_KEY } from '../../../shared/lib/localStorage';
import { signout } from './thunks'; // Экспортируемый logout-редьюсер из authSlice
import { setAuthenticated } from './slice';
import { useGetProfileQuery } from 'src/entities/User/model/api';
import { setCurrentUser } from 'src/entities/User/model/slice';

export const setupAuthSync = () => {
  window.addEventListener('storage', (event) => {
    if (event.key === TOKEN_KEY) {
      if (event.newValue) {
        const { data } = useGetProfileQuery();
        const token = getTokenFromLocalStorage();
        store.dispatch(setAuthenticated({ token: token }));
        store.dispatch(setCurrentUser(data));
        // store.dispatch(signin({ token: event.newValue }));
      } else {
        store.dispatch(signout());
      }
    }
  });
};
