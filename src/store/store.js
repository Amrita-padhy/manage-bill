import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userStore";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
