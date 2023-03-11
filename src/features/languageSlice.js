import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { languagesURL } from "../api/languagesAPI/languagesAPI";

const initialState = {
    languages: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const getLanguages = createAsyncThunk("languages/getLanguages", async () => {
    const res = await fetch(languagesURL);
    const data = await res.json();
    return data;
})
const languageSlice = createSlice({
    name: "languages",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getLanguages.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
            .addCase(getLanguages.fulfilled, (state, action) => {
                state.languages = action.payload;
                state.isLoading = false
            })
            .addCase(getLanguages.rejected, (state, action) => {
                state.languages = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
});

export default languageSlice.reducer;