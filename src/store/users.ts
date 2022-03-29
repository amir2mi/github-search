import { createSlice } from "@reduxjs/toolkit";

interface User {
  [key: string]: string;
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
  name: "user",
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
    },
  },
});

export const { enableLoading, disableLoading, cacheUser } = userSlice.actions;
export default userSlice.reducer;
