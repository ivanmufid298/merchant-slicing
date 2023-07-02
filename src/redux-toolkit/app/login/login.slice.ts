import { RootState } from '@/redux-toolkit/store';
import { LoginResponse } from '@/types/login';
import { createSlice } from '@reduxjs/toolkit';
import { login } from './login.thunk';

export type LoginState = {
  loginData: LoginResponse | null;
  status: boolean;
  message: string;
};

const initialState: LoginState = {
  loginData: null,
  status: false,
  message: '',
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loginData = payload.data;
    });
  },
});

export const selectedLoginResponse = (state: RootState) =>
  state.loginSlice.loginData;

export default LoginSlice.reducer;
