import { HOME_URL } from "../apipath";
import AxiosApi from "../api";
import { getHomeSlice } from "../Slice/HomeSlice";

const api = new AxiosApi();

export const getHomeAction = () => {
  return (dispatch) => {
    api.invoke(HOME_URL, "get", (data, success, statusCode) => {
      if (success) {
        if (statusCode === 200) {
          dispatch(getHomeSlice(data));
        } else {
          console.error(data.message);
          // Handle error or dispatch an action for error handling
        }
      } else {
        console.error("Something went wrong");
        // Handle error or dispatch an action for error handling
      }
    });
  };
};
