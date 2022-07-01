import httpServ from "../../serviceWorker/http.service";
import { SET_DETAIL_ROOM } from "../type/layChiTietPhongType";
export const layChiTietPhongAction = (id) => {
  return (dispatch) => {
    httpServ
      .layChiTietPhong(id)
      .then((res) => {
        dispatch({
          type: SET_DETAIL_ROOM,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
