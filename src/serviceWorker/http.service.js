import AxiosServ from "./axios.service";

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() {}

  layDanhSachViTri = () => {
    const uri = "/api/locations";
    return AxiosServ.getMethod(uri);
  };
  layDanhSachPhong = () => {
    const uri = `/api/rooms/`;
    return AxiosServ.getMethod(uri);
  };
  layChiTietPhong = (id) => {
    const uri = `api/rooms/${id}`;
    return AxiosServ.getMethod(uri);
  };
  dangNhap = (data) => {
    const uri = "/api/auth/login";
    return AxiosServ.postMethod(uri, data);
  };
  dangKy = (data) => {
    const uri = "/api/auth/register";
    return AxiosServ.postMethod(uri, data);
  };
  datPhong = (data) => {
    const uri = "api/rooms/booking";
    return AxiosServ.postMethod(uri, data);
  };
  layDSNguoiDung = (minItem, maxItem) => {
    const uri = `/api/users/pagination?skip=${minItem}&limit=${maxItem}`;
    return AxiosServ.getMethod(uri);
  };
  themNguoiDung = (data) => {
    const uri = "/api/users";
    return AxiosServ.postMethod(uri, data);
  };
  xoaNguoiDung = (id) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.deleteMothod(uri);
  };
  capNhatNguoiDung = (id, data) => {
    const uri = `/api/users/${id}`;
    return AxiosServ.putMethod(uri, data);
  };
  taoPhong = (data) => {
    const uri = "/api/rooms";
    return AxiosServ.postMethod(uri, data);
  };
  xoaPhong = (id) => {
    const uri = `/api/rooms/${id}`;
    return AxiosServ.deleteMothod(uri);
  };
  capNhatPhong = (id, data) => {
    const uri = `/api/rooms/${id}`;
    return AxiosServ.putMethod(uri, data);
  };
  capNhatHinhAnhPhong = (id, FormData) => {
    const uri = `/api/rooms/upload-image/${id}`;
    return AxiosServ.postMethod(uri, FormData);
  };
  capNhatAvatar = (FormData) => {
    const uri = `api/users/upload-avatar`;
    return AxiosServ.postMethod(uri, FormData);
  };
  layDanhGia = (id) => {
    const uri = `/api/reviews/byRoom?roomId=${id}`;
    return AxiosServ.getMethod(uri);
  };
  taoDanhGia = (id, data) => {
    const uri = `/api/reviews?roomId=${id}`;
    return AxiosServ.postMethod(uri, data);
  };
  xoaDanhGia = (id) => {
    const uri = `/api/reviews/${id}`;
    return AxiosServ.deleteMothod(uri);
  };
  capNhatDanhGia = (id, data) => {
    const uri = `/api/reviews/${id}`;
    return AxiosServ.putMethod(uri, data);
  };
}
const httpServ = new HttpRequestService();

export default httpServ;
