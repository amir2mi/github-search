import { createSlice } from "@reduxjs/toolkit";

interface SearchItem {
  login: string;
  avatar_url: string;
}

export interface SearchState {
  value: string;
  isLoading: boolean;
  items: SearchItem[];
}

const initialState: SearchState = {
  value: "",
  isLoading: false,
  items: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload.value;
    },
    searchItems: (state, action) => {},
  },
});

export const { setSearchValue, searchItems } = searchSlice.actions;
export default searchSlice.reducer;
