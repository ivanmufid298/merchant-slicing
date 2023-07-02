import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { AskMeSlice } from './app/askme/askme.slice';
import { LoginSlice } from './app/login/login.slice';

import { appSlice } from './app/slice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    askMeSlice: AskMeSlice.reducer,
    loginSlice: LoginSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
