import { createSlice } from "@reduxjs/toolkit";

export interface User {
  [key: string]: any;
  avatar_url?: string;
  bio?: string;
  name?: string;
}

export interface UserState {
  isLoading: boolean;
  cachedUsers: User;
}

const initialState: UserState = {
  isLoading: false,
  cachedUsers: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    enableLoading: (state) => {
      state.isLoading = true;
    },
    disableLoading: (state) => {
      state.isLoading = false;
    },
    cacheUser: (state, action) => {
      const index = action.payload.login;
      state.cachedUsers[index] = action.payload;
      state.isLoading = false;
    },
  },
});

export const { enableLoading, disableLoading, cacheUser } = userSlice.actions;
export default userSlice.reducer;
