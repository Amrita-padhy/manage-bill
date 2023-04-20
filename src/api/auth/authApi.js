import api from "../api";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/boot/firebase";

const URLS = {
  register: "/register",
};

// handle auth related errors
function handleAuthErrorMsg(msg) {
  switch (msg) {
    case "Firebase: Error (auth/invalid-email).":
      return "Check your email or password";
    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      return "Check your Email or password";
    case "Firebase: Error (auth/user-not-found).":
      return "Check your Email or password";
    case "Firebase: Error (auth/wrong-password).":
      return "Check your Email or password";
    case "Firebase: Error (auth/email-already-in-use).":
      return "Email already in use";

    default:
      break;
  }
}

const register = async (body) => {
  const result = {
    response: true,
  };
  try {
    const { data } = await api.post(URLS.register, body);
    console.log(data);
    result.message = data.message;
  } catch (error) {
    console.log(error);
    result.response = false;
    result.message = error.response.data.message;
  } finally {
    return result;
  }
};

const login = async (body) => {
  const result = {
    response: true,
  };
  try {
    await signInWithEmailAndPassword(auth, body.email, body.password);
  } catch (error) {
    result.response = false;
    result.message = handleAuthErrorMsg(error.message);
  } finally {
    return result;
  }
};
export { register, login };
