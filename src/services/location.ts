import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Location from '../types/location';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllLocations: builder.query<Location, string>({
        query: () => `location/`,
    }),
    getLocationByID: builder.query<Location, string>({
      query: (id) => `location/${id}`,
    })
  }),
})

export const { useGetAllLocationsQuery } = locationApi
export const { useGetLocationByIDQuery } = locationApi


