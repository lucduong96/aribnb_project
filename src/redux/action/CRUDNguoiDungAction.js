import { message } from "antd";
import { history } from "../../App";
import httpServ from "../../serviceWorker/http.service";
import {
  CAP_NHAT_NGUOI_DUNG,
  CAP_NHAT_NGUOI_DUNG_AVATAR,
  THEM_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../type/CRUDNguoiDungType";
export const themNguoiDungAction = (data) => {
  return (dispatch) => {
    httpServ
      .themNguoiDung(data)
      .then((res) => {
        dispatch({
          type: THEM_NGUOI_DUNG,
          payload: res.data,
        });
        message.success("THÊM NGƯỜI DÙNG THÀNH CÔNG");
      })
      .catch((err) => {});
  };
};
export const xoaNguoiDungAction = (id) => {
  return (dispatch) => {
    httpServ
      .xoaNguoiDung(id)
      .then((res) => {
        console.log(res);
        dispatch({
          type: XOA_NGUOI_DUNG,
          payload: res.data,
        });
        message.success("XÓA NGƯỜI DÙNG THÀNH CÔNG");
      })
      .catch((err) => {});
  };
};
export const capNhatNguoiDungAction = (id, data) => {
  return (dispatch) => {
    httpServ
      .capNhatNguoiDung(id, data)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: CAP_NHAT_NGUOI_DUNG,
            payload: res.data,
          });
          setTimeout(() => {
            message.success("CẬP NHẬT NGƯỜI DÙNG THÀNH CÔNG");
            history.goBack();
          }, [2000]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const capNhatNguoiDungAvatarAction = (FormData) => {
  return (dispatch) => {
    httpServ
      .capNhatAvatar(FormData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: CAP_NHAT_NGUOI_DUNG_AVATAR,
            payload: res.data,
          });
          setTimeout(() => {
            message.success("CẬP NHẬT NGƯỜI DÙNG AVATAR THÀNH CÔNG");
            // history.goBack();
          }, [2000]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
