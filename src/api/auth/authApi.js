import api from "../api";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/boot/firebase";

const URLS = {
  register: "/register",
};

const register = (body) => {
  return api.post(URLS.register, body);
};

const login = async (body) => {
  try {
    await signInWithEmailAndPassword(auth, body.email, body.password);
  } catch (error) {
    console.log(error);
  }
};
export { register, login };
