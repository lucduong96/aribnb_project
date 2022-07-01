import httpServ from "../../serviceWorker/http.service";
import { DANG_NHAP_TYPE } from "../type/localStorageType";
import { history } from "../../App";
import { message, Button, Space } from "antd";
import { Redirect } from "react-router-dom";
export const dangNhapAction = (data) => {
  return (dispatch) => {
    httpServ
      .dangNhap(data)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: DANG_NHAP_TYPE,
            payload: res.data.user,
          });
          setTimeout(() => {
            message.success("Đăng nhập Thành công");
            window.location.assign("/");
            // <Redirect to="/" />;
          }, [3000]);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Mật khẩu hoặc email không đúng");
      });
  };
};
