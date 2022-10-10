import axios from "./axios";
import { Types } from "./Types";

export const logIn = () => {
  const config = { header: { "Content-Type": "application/json" } };
  return async (dispatch) => {
    try {
      const res = await axios.post(`/user/login`, config);
      dispatch({
        type: Types.LOGIN,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
