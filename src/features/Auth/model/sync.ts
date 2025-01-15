// import { useGetProfileWithSync } from 'src/entities/User/model/api';
import { store } from '../../../app/store/store'; // Импорт стора из файла store.ts
import { getTokenFromLocalStorage, TOKEN_KEY } from '../../../shared/lib/localStorage';
import { signout } from './thunks'; // Экспортируемый logout-редьюсер из authSlice
import { setAuthenticated } from './slice';
import { baseApi } from '../../../shared/api/baseApi';
import { setNeedUpdateState } from 'src/entities/User/model/slice';
// import { useGetProfileQuery } from 'src/entities/User/model/api';
// import { setCurrentUser } from 'src/entities/User/model/slice';

export const setupAuthSync = () => {
  window.addEventListener('storage', (event) => {
    if (event.key === TOKEN_KEY) {
      if (event.newValue) {
        // const { data } = useGetProfileQuery();
        store.dispatch(baseApi.util.invalidateTags(['Profile']));
        // store.dispatch(userApi.util.invalidateTags(['Profile']));
        const token = getTokenFromLocalStorage();
        store.dispatch(setAuthenticated(token));
        // store.dispatch(setCurrentUser(data));
        // store.dispatch(signin({ token: event.newValue }));
        store.dispatch(setNeedUpdateState(true));
      } else {
        store.dispatch(signout());
      }
    }
  });
};
