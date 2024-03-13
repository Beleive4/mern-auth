import { LOGIN_URL } from "../apipath";
import AxiosApi from "../api";
import { loginReducer } from "../Slice/AuthenticationSlice";

const api = new AxiosApi();

export const loginAction = (val) => {
  return (dispatch) => {
    api.invoke(
      LOGIN_URL,
      "post",
      (data, success, statusCode) => {
        if (success) {
          if (statusCode === 200) {
            dispatch(loginReducer(data));
           
          } else {
            console.error(data.message);
            // Handle error or dispatch an action for error handling
          }
        } else {
          console.error("Something went wrong");
          // Handle error or dispatch an action for error handling
        }
      },
      val
    );
  };
};
