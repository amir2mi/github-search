import { createSlice } from "@reduxjs/toolkit";

interface SearchItem {
  login: string;
  avatar_url: string;
}

export interface SearchState {
  value: string;
  isLoading: boolean;
  resultCount: number;
  items: SearchItem[];
}

const initialState: SearchState = {
  value: "",
  isLoading: false,
  resultCount: -1, // -1 means the user still has not searched
  items: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload.value;
    },
    clearValue: (state) => {
      state.value = "";
    },
    searching: (state) => {
      state.isLoading = true;
    },
    setItems: (state, action) => {
      state.isLoading = false;
      state.resultCount = action.payload.total_count;
      state.items = action.payload.items;
    },
    clearItems: (state) => {
      state.isLoading = false;
      state.resultCount = -1;
      state.items = [];
    },
  },
});

export const { setValue, clearValue, searching, setItems, clearItems } = searchSlice.actions;
export default searchSlice.reducer;
