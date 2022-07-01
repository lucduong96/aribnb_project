import { combineReducers } from "redux";
import { DanhGiaReducer } from "./DanhGiaReducer";
import { layChiTietPhongReducer } from "./layChiTietPhongReducer";
import { dsNguoiDungPhanTrangReducer } from "./layDSNguoiDungReducer";
import { layDSPhongReducer } from "./layDSPhongReducer";
import { layDSViTriReducer } from "./layDSViTriReducer";
import { LoadingReducer } from "./LoadingReducer";
import { localStorageReducer } from "./localStorageReducer";

export const rootReducer = combineReducers({
  layDSViTriReducer,
  layDSPhongReducer,
  layChiTietPhongReducer,
  localStorageReducer,
  LoadingReducer,
  dsNguoiDungPhanTrangReducer,
  DanhGiaReducer,
});
