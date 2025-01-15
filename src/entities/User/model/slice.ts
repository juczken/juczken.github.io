import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';

interface UserState {
  currentUser: User | null;
  needUpdateState: boolean;
}

const initialState: UserState = {
  currentUser: null,
  needUpdateState: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload,
      };
    },
    setNeedUpdateState: (state, action) => {
      state.needUpdateState = action.payload;
    },
  },
});

export const { setCurrentUser, clearCurrentUser, updateCurrentUser, setNeedUpdateState } = userSlice.actions;
export default userSlice.reducer;
