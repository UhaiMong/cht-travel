import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const getBookings = createAsyncThunk("auth/getBookings", async () => {
  const res = await fetch(
    "https://api.hilltractstech.com/api/bookings"
  );
  const data = await res.json();
  return data;
});

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getBookings.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getBookings.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.bookings = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(getBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.bookings = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { } = bookingSlice.actions;

export default bookingSlice.reducer;
