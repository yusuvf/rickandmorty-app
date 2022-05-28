import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Character from '../types/character';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacterByID: builder.query<Character, string>({
        query: (id) => `character/${id}`,
    }),
  }),
})

export const { useGetCharacterByIDQuery } = characterApi


