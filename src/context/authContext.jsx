import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUserInfo } from "../api/user/userApi";
import { auth } from "../boot/firebase";
import { setUser } from "../store/user/userStore";

const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const {
          data: { response },
        } = await getUserInfo({ uid: user.uid });
        dispatch(setUser(response));
        // TODO navigate user to the home page

      } else {
        // TODO navigate user to auth page
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext.Provider value={{}}> {children} </AuthContext.Provider>;
}