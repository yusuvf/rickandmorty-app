import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { locationApi } from '../services/location';
import { characterApi } from '../services/character';

export const store = configureStore({
  reducer: {
    [locationApi.reducerPath]: locationApi.reducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware).concat(characterApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch