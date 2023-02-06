import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUserInfo } from "../api/user/userApi";
import { auth } from "../boot/firebase";
import { setUser } from "../store/user/userStore";

const AuthContext = createContext({
  // handleAuthErrorMsg: () => Promise,
});
// export const useAuth = () => useContext(AuthContext);
export default function AuthContextProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // console.log(user);
      if (user) {
        const { data } = await getUserInfo({ uid: user.uid });
        console.log(data.uid);
        dispatch(setUser(data));
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
