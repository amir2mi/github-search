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
      state.items = action.payload.items;
    },
    clearItems: (state) => {
      state.isLoading = false;
      state.items = [];
    },
  },
});

export const { setValue, clearValue, searching, setItems, clearItems } = searchSlice.actions;
export default searchSlice.reducer;
