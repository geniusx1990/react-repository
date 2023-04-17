import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API, ICardItem, ICardList, ISearchResponse } from '../types/interfaces';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<ICardList, string>({
      query: (request) => {
        if (request === '') {
          request = `${API.URL}${API.RANDOM}${API.ACCESS_KEY}`;
        } else {
          request = `${API.URL}${API.Search}${URL}${API.ACCESS_KEY}`;
        }
        return request;
      },
      transformResponse: (response: ICardList & ISearchResponse) => {
        return response.results ? response.results : response;
      },
    }),
    getById: builder.query<ICardItem, string>({
      query: (id) => `${API.ByID}${id}?${API.ACCESS_KEY}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetByIdQuery } = pokemonApi;
