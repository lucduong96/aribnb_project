import httpServ from "../../serviceWorker/http.service";
import { SET_USER_PAGINATE } from "../type/layDSNguoiDungType";
export const layDSNguoiDungAction = (minItem, maxItem) => {
  return (dispatch) => {
    httpServ
      .layDSNguoiDung(minItem, maxItem)
      .then((res) => {
        dispatch({
          type: SET_USER_PAGINATE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
