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
    clearSearchValue: (state) => {
      state.value = "";
    },
    startingSearch: (state) => {
      state.isLoading = true;
    },
    setSearchItems: (state, action) => {
      state.isLoading = false;
      state.items = action.payload.data;
    },
    clearSearchItems: (state) => {
      state.isLoading = false;
      state.items = [];
    },
  },
});

export const { setSearchValue, clearSearchValue, startingSearch, setSearchItems } = searchSlice.actions;
export default searchSlice.reducer;
