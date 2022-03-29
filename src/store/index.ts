import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import type { SearchState } from "./search";

// use this for useSelector returned state
export interface storeProps {
  search: SearchState;
}

const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});

export default store;
