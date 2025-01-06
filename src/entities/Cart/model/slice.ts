import { createSlice } from '@reduxjs/toolkit';
import { CartEntry } from './types';

interface CartEntryState {
  currentCartEntry: CartEntry[];
}

const initialState: CartEntryState = {
  currentCartEntry: [],
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
      state.currentCartEntry = [];
    },
  },
});

export const { addToCart, removeFromCart, setQuantity, clearCart } = cartEntrySlice.actions;
export default cartEntrySlice.reducer;
