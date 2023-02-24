import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
  searchQuery: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const getHotel = createAsyncThunk("auth/getHotel", async () => {
  const res = await fetch(
    "https://cht-travel-server-repo.vercel.app/hotels-bdbn"
  );
  const data = await res.json();
  return data;
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    setHotel: (state, action) => {
      state.hotels = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getHotel.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getHotel.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.hotels = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(getHotel.rejected, (state, action) => {
        state.isLoading = false;
        state.hotels = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { handleSearch, setHotel } = searchSlice.actions;

export default searchSlice.reducer;
