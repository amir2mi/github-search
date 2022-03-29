import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import type { SearchState } from "./search";
import api from "./middleware/api";

// use this for useSelector returned state
export interface storeProps {
  search: SearchState;
}

const store = configureStore({
  reducer: {
    search: searchSlice,
  },
  middleware: (defaultMiddleware) => [...defaultMiddleware(), api],
});

export default store;
