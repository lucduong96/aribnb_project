import httpServ from "../../serviceWorker/http.service";
import { DANG_KY_TYPE } from "../type/localStorageType";
import { history } from "../../App";
import { message, Button, Space } from "antd";
export const dangKyAction = (data) => {
  return (dispatch) => {
    httpServ
      .dangKy(data)
      .then((res) => {
        dispatch({
          type: DANG_KY_TYPE,
          payload: res.data,
        });
        setTimeout(() => {
          message.success("Đăng Ký Thàng công");
          history.goBack();
        }, [2000]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
