import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/Auth/model/slice';
import profileReducer from '../../features/Profile/model/slice';
import userReducer from '../../entities/User/model/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
