import { Login, LoginResponse } from '@/types/login';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('/login', async (payload: Login) => {
  let response: LoginResponse = {
    role: payload.email === 'merchant1' ? 'super_store' : 'store',
  };
  return { status: 'success', data: response };
});
