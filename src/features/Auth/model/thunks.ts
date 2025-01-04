import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveTokenToLocalStorage, removeTokenFromLocalStorage } from './localStorage';
import { fetch } from '../../../shared/lib/fakeGenerators/fakeGenerators';

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error('Invalid credentials');
      const data = await response.json();

      saveTokenToLocalStorage(data.token);
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
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const signout = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await fetch('/api/signout', {
      method: 'POST',
    });

    removeTokenFromLocalStorage();
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const verifyToken = createAsyncThunk('auth/verifyToken', async (_, thunkAPI) => {
  const token = localStorage.getItem('auth_token');
  if (!token) throw new Error('No token');

  try {
    const response = await fetch('/api/verify-token', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error('Invalid token');
    const data = await response.json();

    return data;
  } catch (error) {
    removeTokenFromLocalStorage();
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
