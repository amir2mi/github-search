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
    setValue: (state, action) => {
      state.value = action.payload;
    },
    getItems: (state, action) => {},
  },
});

export const { setValue, getItems } = searchSlice.actions;
export default searchSlice.reducer;
