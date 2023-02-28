import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../boot/firebase";
import { getUserInfo } from "../api/user/userApi";
import { setUser } from "../store/user/userStore";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const dispatch = useDispatch();
  const [initialUser, setInitialUser] = useState();

  const navigate = useNavigate();

  const login = (body) => {
    return signInWithEmailAndPassword(auth, body.email, body.password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        const { data } = await getUserInfo({ uid: user.uid });
        console.log(data);
        dispatch(setUser(data));
        setInitialUser(data);
        if (data.isOnboard === false) {
          navigate("/onboard");
          return;
        }

        navigate("/main");
      } else {
        setUser(null);
        dispatch(setUser(null));
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ login, initialUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
