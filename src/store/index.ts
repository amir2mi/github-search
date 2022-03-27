import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import type { SearchState } from "./searchSlice";

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
