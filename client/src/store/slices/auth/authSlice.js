import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

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
  },
});

// Action creators are generated for each case reducer function
export const { login, register } = authSlice.actions;
