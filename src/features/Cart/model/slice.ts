import { createSlice } from '@reduxjs/toolkit';
import { CartEntry } from '../../../entities/Cart/model/types';
import { resetState } from '../../../shared/actions/actions';
import { createOrder } from '../../../entities/Order/model/thunks';

interface CartEntryState {
  currentCartEntry: CartEntry[];
  createOrderStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  createOrdreError: string | null | string[];
}

const initialState: CartEntryState = {
  currentCartEntry: [],
  createOrderStatus: 'idle',
  createOrdreError: null,
};

const cartEntrySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.currentCartEntry.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.currentCartEntry = state.currentCartEntry.filter((item) => item.product.id !== action.payload);
    },
    setQuantity: (state, action) => {
      const existingItem = state.currentCartEntry.find((item) => item.product.id === action.payload.product.id);
      if (existingItem) {
        state.currentCartEntry = state.currentCartEntry
          .map((item) =>
            item.product.id === action.payload.product.id ? { ...item, quantity: action.payload.quantity } : item
          )
          .filter((item) => item.quantity > 0);
      } else {
        state.currentCartEntry = [...state.currentCartEntry, { product: action.payload.product, quantity: 1 }];
      }
    },
    clearCart: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetState, () => initialState)
      .addCase(createOrder.pending, (state) => {
        state.createOrderStatus = 'loading';
        state.createOrdreError = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.createOrderStatus = 'succeeded';
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.createOrderStatus = 'failed';
        state.createOrdreError = action.payload as string;
      });
  },
});

export const { addToCart, removeFromCart, setQuantity, clearCart } = cartEntrySlice.actions;
export default cartEntrySlice.reducer;
