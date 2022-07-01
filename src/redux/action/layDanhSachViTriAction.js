import httpServ from "../../serviceWorker/http.service";
import { SET_LIST_LOCATION } from "../type/layDanhSachViTriType";

export const layDSViTriAction = () => {
  return (dispatch) => {
    httpServ
      .layDanhSachViTri()
      .then((res) => {
        dispatch({
          type: SET_LIST_LOCATION,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
