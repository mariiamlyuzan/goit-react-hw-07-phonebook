import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contacts/contactSlice';
import contacts from '../redux/contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),

    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
