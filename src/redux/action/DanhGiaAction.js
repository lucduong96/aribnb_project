import httpServ from "../../serviceWorker/http.service";
import {
  CAP_NHAT_DANH_GIA,
  LAY_DANH_GIA,
  TAO_DANH_GIA,
  XOA_DANH_GIA,
} from "../type/DanhGiaType";
export const layDanhGiaAction = (id) => {
  return (dispatch) => {
    httpServ
      .layDanhGia(id)
      .then((res) => {
        dispatch({
          type: LAY_DANH_GIA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const taoDanhGiaAction = (id, data) => {
  return (dispatch) => {
    httpServ
      .taoDanhGia(id, data)
      .then((res) => {
        dispatch({
          type: TAO_DANH_GIA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const xoaDanhGiaAction = (id) => {
  return (dispatch) => {
    httpServ
      .xoaDanhGia(id)
      .then((res) => {
        dispatch({
          type: XOA_DANH_GIA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const capNhatDanhGiaAction = (id, data) => {
  return (dispatch) => {
    httpServ
      .capNhatDanhGia(id, data)
      .then((res) => {
        dispatch({
          type: CAP_NHAT_DANH_GIA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
