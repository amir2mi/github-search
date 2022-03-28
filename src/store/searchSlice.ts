import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  value: string;
  items: [];
}

const initialState: SearchState = {
  value: "test",
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
