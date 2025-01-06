import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getPartProducts, updateProduct } from './thunks';

interface ProductsState {
  products: Product[];
  categories: Category[];
  // products: Product[] | null;
  // categories: Category[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  status: 'idle',
  error: null,
};

const ProductsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPartProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getPartProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = [...state.products, ...action.payload.products];
      })
      .addCase(getPartProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.products.findIndex((item) => item.id === action.payload.product.id);
        if (index !== -1) {
          state.products[index] = action.payload.product;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = [...action.payload.categories];
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default ProductsSlice.reducer;
