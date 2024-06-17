import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiKey, authUrl } from '../firebase/database'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
  endpoints: builder => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${apiKey}`,
        method: 'POST',
        body: auth,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signInWithPassword?key=${apiKey}`,
        method: 'POST',
        body: auth,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation } = authApi