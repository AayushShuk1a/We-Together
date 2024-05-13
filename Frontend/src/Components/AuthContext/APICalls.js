import axios from "axios";
import { Failure, loginStart, loginSuccess } from "./AuthActions";

const url = "http://localhost:8080/"

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${url}api/auth/login`, user);
    console.log("Response data:", res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.error("Error while logging in:", err);
    console.error("Error response:", err.response);
    dispatch(Failure());
  }
};

