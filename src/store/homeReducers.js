import { Types } from "./Types";

const initialState = {
  Login: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.Types) {
    case Types.LOGIN:
      return {
        ...state,
        LOGIN: action.payload,
      };
  }
}
