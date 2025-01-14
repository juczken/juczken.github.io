import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveTokenToLocalStorage, removeTokenFromLocalStorage } from '../../../shared/lib/localStorage';
import { fetch } from '../../../shared/lib/fakeGenerators/fakeFetch';
import { clearCurrentUser, setCurrentUser } from '../../../entities/User/model/slice';
import { setUnauthenticated } from './slice';

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials: { email: string; password: string } | { token: string }, thunkAPI) => {
    try {
      const response = await ('token' in credentials
        ? fetch(`/api/users/byToken/${credentials.token}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${credentials.token}` },
          })
        : fetch('/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          }));
      if (!response.ok) throw new Error('Invalid credentials');
      const data = await response.json();

      saveTokenToLocalStorage(data.token);
      thunkAPI.dispatch(setCurrentUser(data.user));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (newUser: { password: string; email: string }, thunkAPI) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error('Registration failed');
      const data = await response.json();

      saveTokenToLocalStorage(data.token);
      thunkAPI.dispatch(setCurrentUser(data.user));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const signout = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    removeTokenFromLocalStorage();
    thunkAPI.dispatch(clearCurrentUser());
    thunkAPI.dispatch(setUnauthenticated());

    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
