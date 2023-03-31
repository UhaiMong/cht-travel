import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.hilltractstech.com",
  }),

  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({ url: "users", method: "POST", body: data }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "PUT",
        body: data,
      }),
    }),
    makeAdmin: builder.mutation({
      query: (data) => ({ url: "makeAdmin", method: "PUT", body: data }),
    }),
    checkAdmin: builder.query({
      query: (email) => ({ url: `checkAdmin/${email}` }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useUpdateUserMutation,
  useMakeAdminMutation,
  useCheckAdminQuery,
} = userApi;
