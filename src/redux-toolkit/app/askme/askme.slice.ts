import { RootState } from '@/redux-toolkit/store';
import { AskMe } from '@/types/askme';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAskMeData } from './askme.thunk';

export type AskMeState = {
  askMeData: AskMe | null | undefined;
  status: boolean;
  message: string;
};

const initialState: AskMeState = {
  askMeData: null,
  status: false,
  message: '',
};

export const AskMeSlice = createSlice({
  name: 'AskMe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAskMeData.fulfilled, (state, { payload }) => {
      state.askMeData = payload.data;
    });
  },
});

export const fetchAskMeDtaState = (state: RootState) =>
  state.askMeSlice.askMeData;

export default AskMeSlice.reducer;
