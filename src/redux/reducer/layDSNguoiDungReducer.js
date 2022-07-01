import { SET_USER_PAGINATE } from "../type/layDSNguoiDungType";
import {
  CAP_NHAT_NGUOI_DUNG,
  CAP_NHAT_NGUOI_DUNG_AVATAR,
  EDIT_NGUOI_DUNG,
  SEARCH_NGUOI_DUNG,
  THEM_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../type/CRUDNguoiDungType";
import localStorageServ from "../../serviceWorker/locaStorage.service";

const initialState = {
  dsPhongPhanTrang: [],
  editUser: null,
  updateUserAvatar: localStorageServ.avatarInfor.get(),
};

export const dsNguoiDungPhanTrangReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PAGINATE: {
      state.dsPhongPhanTrang = action.payload;
      return { ...state };
    }
    case THEM_NGUOI_DUNG: {
      const dsPhongPhanTrangUpdate = [...state.dsPhongPhanTrang];
      dsPhongPhanTrangUpdate.push(action.payload);
      state.dsPhongPhanTrang = dsPhongPhanTrangUpdate;
      return { ...state };
    }
    case XOA_NGUOI_DUNG: {
      console.log(action.payload._id);
      const dsPhongPhanTrangUpdate = [...state.dsPhongPhanTrang];
      let index = dsPhongPhanTrangUpdate.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (index !== -1) {
        dsPhongPhanTrangUpdate.splice(index, 1);
      }
      state.dsPhongPhanTrang = dsPhongPhanTrangUpdate;
      return { ...state };
    }
    case EDIT_NGUOI_DUNG: {
      state.editUser = action.payload;
      return { ...state };
    }
    case CAP_NHAT_NGUOI_DUNG: {
      let userUpdate = action.payload;
      state.editUser = userUpdate;
      const dsPhongPhanTrangUpdate = [...state.dsPhongPhanTrang];
      let index = dsPhongPhanTrangUpdate.findIndex((item) => {
        return item._id === userUpdate._id;
      });
      if (index === -1) {
        dsPhongPhanTrangUpdate[index] = userUpdate;
      }
      state.dsPhongPhanTrang = dsPhongPhanTrangUpdate;
      return { ...state };
    }
    case SEARCH_NGUOI_DUNG: {
      let userCanTim = action.payload;

      const dsPhongPhanTrangUpdate = [...state.dsPhongPhanTrang];

      let searchResult = dsPhongPhanTrangUpdate.filter((item) => {
        return (
          item.name?.trim().toUpperCase() === userCanTim.trim().toUpperCase()
        );
      });

      state.dsPhongPhanTrang = searchResult;
      return { ...state };
    }
    case CAP_NHAT_NGUOI_DUNG_AVATAR: {
      state.updateUserAvatar = action.payload.avatar;
      localStorageServ.avatarInfor.set(action.payload.avatar);
      return { ...state };
    }
    default:
      return state;
  }
};
