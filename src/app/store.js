import { configureStore } from "@reduxjs/toolkit";
import { hotelApi } from "../api/hotelSlice";
import { userApi } from "../api/userSlice";
import authSlice from "../features/auth/authSlice";
import bookingSlice from "../features/bookingSlice";
import cartSlice from "../features/cartSlice";
import languageFilterSlice from "../features/languageFilterSlice";
import languageSlice from "../features/languageSlice";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authSlice,
    search: searchSlice,
    booking: bookingSlice,
    cart: cartSlice,
    languages: languageSlice,
    languageFilter: languageFilterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelApi.middleware, userApi.middleware),
});
