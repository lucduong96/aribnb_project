import httpServ from "../../serviceWorker/http.service";
import {
  CREATE_ROOM,
  DELETE_ROOM,
  SET_LIST_ROOM,
  UPADTE_IMAGE_ROOM,
  UPADTE_ROOM,
} from "../type/layDanhSachPhongType";
import { history } from "../../App";
import { message } from "antd";
export const layDSPhongAction = () => {
  return (dispatch) => {
    httpServ
      .layDanhSachPhong()
      .then((res) => {
        dispatch({
          type: SET_LIST_ROOM,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
};

export const taoPhongAction = (data) => {
  return (dispatch) => {
    httpServ
      .taoPhong(data)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: CREATE_ROOM,
            payload: res.data,
          });
          setTimeout(() => {
            history.goBack();
            message.success("Tạo phòng thành công");
          }, [3000]);
        }
      })
      .catch((err) => {
        message.error("Tạo phòng không thành công");
      });
  };
};
export const xoaPhongAction = (id) => {
  return (dispatch) => {
    httpServ
      .xoaPhong(id)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: DELETE_ROOM,
            payload: res.data,
          });
          setTimeout(() => {
            message.success("Xóa phòng thành công");
          }, [3000]);
        }
      })
      .catch((err) => {
        message.error("Xóa phòng không thành công");
      });
  };
};
export const capNhatPhongAction = (id, data) => {
  return (dispatch) => {
    httpServ
      .capNhatPhong(id, data)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: UPADTE_ROOM,
            payload: res.data,
          });
          setTimeout(() => {
            history.goBack();
            message.success("Cập nhật phòng thành công");
          }, [3000]);
        }
      })
      .catch((err) => {
        message.error("Cập nhật phòng không thành công");
      });
  };
};
export const capNhatHinhAnhPhongAction = (id, data) => {
  return (dispatch) => {
    httpServ
      .capNhatHinhAnhPhong(id, data)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: UPADTE_IMAGE_ROOM,
            payload: res.data,
          });
          setTimeout(() => {
            // history.goBack();
            message.success("Cập nhật hình ảnh phòng thành công");
          }, [3000]);
        }
      })
      .catch((err) => {
        message.error("Cập nhật phòng không thành công");
      });
  };
};
