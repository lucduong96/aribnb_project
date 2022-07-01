import { message } from "antd";
import httpServ from "../../serviceWorker/http.service";
export const datPhongAction = (data) => {
  return (dispatch) => {
    httpServ
      .datPhong(data)
      .then((res) => {
        message.success("Đặt Phòng thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
