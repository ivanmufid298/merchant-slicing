import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAskMeData = createAsyncThunk('/askme', async () => {
  let askMeData = {
    title: 'Feel Free To Ask Me Anything',
    subTitle:
      "Whether you have questions, need advice, or just want to have a conversation, I'm here to help.",
    actionType: [
      {
        type: 'whatsapp',
        to: '6123123123',
      },
      {
        type: 'email',
        to: 'initestemail@email.com',
        subject: 'Customer Issue on Good Doctor App',
      },
    ],
  };
  return { status: 'success', data: askMeData };
});
