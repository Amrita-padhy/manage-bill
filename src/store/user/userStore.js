import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUser: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;
