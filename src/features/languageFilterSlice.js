import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    filteredLanguage: [],
};
const languageFilterSlice = createSlice({
    name: "filteredLanguage",
    initialState,
    reducers: {
        selectLanguage: (state, action) => {
            if (!state.filteredLanguage.includes(action.payload)) {
                state.filteredLanguage.push(action.payload);
            }
            else {
                state.filteredLanguage = state.filteredLanguage.filter(translated => translated !== action.payload)
            }
        }
    }
});

export const { selectLanguage } = languageFilterSlice.actions;
export default languageFilterSlice.reducer;