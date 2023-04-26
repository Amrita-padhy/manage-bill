import { configureStore } from "@reduxjs/toolkit";
import userReducer, { authListener } from "./user/userStore";
import propertyReducer from "./property/propertyReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    property:propertyReducer
  },
});

store.dispatch(authListener());
export default store;
