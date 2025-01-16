import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTokenFromLocalStorage } from '../../../shared/lib/localStorage';
// import { fetch } from '../../../shared/lib/fakeGenerators/fakeFetch';
import { API_BASE_URL } from '../../../shared/configs/api';
import { ProductsFilters, ProductsResult, ServerErrors } from '../../../shared/types/serverTypes';
import { getLocaleErrorMessage } from '../../../shared/lib/errorsParsing';
import { stringifyObject } from '../../../shared/lib/stringifyObjectHelper';

export const getPartProducts = createAsyncThunk<ProductsResult, ProductsFilters>(
  'products/getpage',
  async (filters, thunkAPI) => {
    const token = getTokenFromLocalStorage();
    if (!token) throw new Error('No token');

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/products${!filters ? '' : `?${new URLSearchParams(stringifyObject(filters)).toString()}`}`,
        {
          method: 'GET',
          // headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) {
        const errors = await response.json();
        const errorMessages = (errors as ServerErrors).errors.map((error) => getLocaleErrorMessage(error));
        return thunkAPI.rejectWithValue(errorMessages);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

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
