import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { hotelAPI_URL_Bandarban } from "./hotelsAPI_URL/hotelAPI_URL";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: hotelAPI_URL_Bandarban,
  }),
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    getHotel: builder.query({
      query: () => ({ url: "hotels" }),
      providesTags: ["Hotels"],
    }),
    addHotel: builder.mutation({
      query: (data) => ({ url: "addHotels", method: "POST", body: data }),
      invalidatesTags: ["Hotels"],
    }),
    removeHotel: builder.mutation({
      query: (id) => ({ url: `hotel/${id}`, method: "DELETE" }),
      invalidatesTags: ["Hotels"],
    }),
    updateHotel: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `updateHotel/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Hotels"],
    }),
    getSingleHotel: builder.query({
      query: (id) => ({ url: `hotel/${id}` }),
    }),
  }),
});

export const {
  useGetHotelQuery,
  useAddHotelMutation,
  useRemoveHotelMutation,
  useUpdateHotelMutation,
  useGetSingleHotelQuery,
} = hotelApi;
