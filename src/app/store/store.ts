import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/Auth/model/slice';
import profileReducer from '../../features/Profile/model/slice';
import userReducer from '../../entities/User/model/slice';
import productsReducer from '../../features/Products/model/slice';
import cartReducer from '../../entities/Cart/model/slice';
import { apiMiddleware, apiReducer } from '../api/api';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    auth: authReducer,
    profile: profileReducer,
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
