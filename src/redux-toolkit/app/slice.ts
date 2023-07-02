import enLanguage from '@/i18n/en';
import idLanguage from '@/i18n/id';
import type { RootState } from '@/redux-toolkit/store';
import { AlertProps, LanguageProps, PopupDialogProps } from '@/types/app';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AppState = {
  localeLanguage: 'ID' | 'EN';
  messageLanguage: LanguageProps;
  isLoading: boolean;
  config: object;
  popup: PopupDialogProps;
  alert: AlertProps;
};

const initialState: AppState = {
  localeLanguage: 'ID',
  messageLanguage: {
    id: { ...idLanguage },
    en: { ...enLanguage },
  },
  isLoading: false,
  config: {},
  popup: {
    isOpen: false,
    title: null,
    message: null,
    actions: [],
  },
  alert: {
    isOpen: false,
    message: null,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    openPopup(state, action: PayloadAction<PopupDialogProps>) {
      state.popup = action.payload;
    },
    closePopup(state) {
      state.popup.isOpen = false;
    },
    openAlert(state, action: PayloadAction<AlertProps>) {
      state.alert = action.payload;
    },
    closeAlert(state) {
      state.alert.isOpen = false;
    },
  },
  extraReducers: () => {},
});

export const isLoadingState = (state: RootState) => state.app.isLoading;
export const popupState = (state: RootState) => state.app.popup;
export const alertState = (state: RootState) => state.app.alert;
export const localeLanguageState = (state: RootState) =>
  state.app.localeLanguage;
export const messageLanguageState = (state: RootState) =>
  state.app.messageLanguage;

export const { setIsLoading, openPopup, closePopup, openAlert, closeAlert } =
  appSlice.actions;

export default appSlice.reducer;
