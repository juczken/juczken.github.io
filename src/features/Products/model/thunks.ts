import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTokenFromLocalStorage } from '../../../shared/lib/localStorage';
import { fetch } from '../../../shared/lib/fakeGenerators/fakeFetch';

export const getPartProducts = createAsyncThunk('products/getpart', async (_, thunkAPI) => {
  const token = getTokenFromLocalStorage();
  if (!token) throw new Error('No token');

  try {
    const response = await fetch('/api/products/get', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const updateProduct = createAsyncThunk(
  'products/update',
  async (updateProduct: { id: string; updatedProduct: Partial<Product> }, thunkAPI) => {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error('No token');

    try {
      const response = await fetch('/api/products/update', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(updateProduct),
      });

      if (!response.ok) throw new Error('Update failed');
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const getCategories = createAsyncThunk('products/getCategories', async (_, thunkAPI) => {
  // const token = getTokenFromLocalStorage();
  // if (!token) throw new Error('No token');

  try {
    const response = await fetch('/api/products/getCategories', {
      method: 'GET',
      // headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
