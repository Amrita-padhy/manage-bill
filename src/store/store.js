import { configureStore } from "@reduxjs/toolkit";
import userReducer, { authListener } from "./user/userStore";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

store.dispatch(authListener());
export default store;
