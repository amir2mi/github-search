import { createSlice } from "@reduxjs/toolkit";

export interface User {
  [key: string]: any;
  avatar_url?: string;
  bio?: string;
  name?: string;
  repos?: [];
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
      const index = action.payload.data.login;
      state.cachedUsers[index] = action.payload.data;
      state.isLoading = false;
    },
    cacheUserRepos: (state, action) => {
      const index = action.payload.username;
      state.cachedUsers[index].repos = action.payload.data;
      state.isLoading = false;
    },
  },
});

export const { enableLoading, disableLoading, cacheUser, cacheUserRepos } = userSlice.actions;
export default userSlice.reducer;
