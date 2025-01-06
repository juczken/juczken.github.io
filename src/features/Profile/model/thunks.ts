import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetch } from '../../../shared/lib/fakeGenerators/fakeFetch';
import { getTokenFromLocalStorage } from '../../../shared/lib/localStorage';
import { updateCurrentUser } from '../../../entities/User/model/slice';

export const getProfile = createAsyncThunk('profile/get', async (email: string, thunkAPI) => {
  const token = getTokenFromLocalStorage();
  if (!token) throw new Error('No token');

  try {
    const response = await fetch(`/api/users/${email}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();

    thunkAPI.dispatch(updateCurrentUser(data.user));

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const updateProfile = createAsyncThunk(
  'profile/update',
  async (user: { email: string; name: string; about: string }, thunkAPI) => {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error('No token');

    try {
      const response = await fetch('/api/users/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error('Update profile failed');
      const data = await response.json();

      thunkAPI.dispatch(updateCurrentUser(data.user));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'profile/chngePassword',
  async (user: { oldPassword: string; newPassword: string; email: string }, thunkAPI) => {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error('No token');

    try {
      const response = await fetch('/api/users/chngePassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error('Change password failed');
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
