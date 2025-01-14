// import { useGetProfileWithSync } from 'src/entities/User/model/api';
import { store } from '../../../app/store/store'; // Импорт стора из файла store.ts
import { getTokenFromLocalStorage, TOKEN_KEY } from '../../../shared/lib/localStorage';
import { signout } from './thunks'; // Экспортируемый logout-редьюсер из authSlice
import { setAuthenticated } from './slice';
import { userApi } from 'src/entities/User/model/api';
// import { useGetProfileQuery } from 'src/entities/User/model/api';
// import { setCurrentUser } from 'src/entities/User/model/slice';

export const setupAuthSync = () => {
  window.addEventListener('storage', (event) => {
    if (event.key === TOKEN_KEY) {
      if (event.newValue) {
        // const { data } = useGetProfileQuery();
        console.log('addEventListener before invalidateTags');
        store.dispatch(userApi.util.invalidateTags(['Profile']));
        console.log('addEventListener after invalidateTags');
        const token = getTokenFromLocalStorage();
        console.log('addEventListener after getTokenFromLocalStorage', token);
        store.dispatch(setAuthenticated({ token: token }));
        console.log('addEventListener after setAuthenticated', token);
        // store.dispatch(setCurrentUser(data));
        // store.dispatch(signin({ token: event.newValue }));
      } else {
        console.log('addEventListener before signout');
        store.dispatch(signout());
        console.log('addEventListener after signout');
      }
    }
  });
};
