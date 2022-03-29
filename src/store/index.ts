import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search";
import type { SearchState } from "./search";
import userSlice from "./users";
import type { UserState } from "./users";
import api from "./middleware/api";

// use this for useSelector returned state
export interface storeProps {
  search: SearchState;
  users: UserState;
}

const store = configureStore({
  reducer: {
    search: searchSlice,
    users: userSlice,
  },
  middleware: (defaultMiddleware) => [...defaultMiddleware(), api],
});

export default store;
