import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../boot/firebase";
import { getUserInfo } from "../../api/user/userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
export const selectUser = (state) => state.user;
export const authListener = () => (dispatch) => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      console.log(user);
      const { data } = await getUserInfo({ uid: user.uid });
      dispatch(setUser(data));
    } else {
      dispatch(clearUser());
    }
  });

  return () => unsubscribe();
};
