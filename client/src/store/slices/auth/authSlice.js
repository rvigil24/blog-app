import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (_, { payload }) => {
      return {
        isLoggedIn: true,
        user: { ...payload },
      };
    },
    register: (_, { payload }) => {
      return {
        isLoggedIn: true,
        user: { ...payload },
      };
    },
    logout: (_state, _action) => {
      return {
        isLoggedIn: false,
        user: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, register, logout } = authSlice.actions;
