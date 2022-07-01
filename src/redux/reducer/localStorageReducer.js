import localStorageServ from "../../serviceWorker/locaStorage.service";
import {
  DANG_KY_TYPE,
  DANG_NHAP_TYPE,
  REMOVE_LOCAL,
} from "../type/localStorageType";

const initialState = {
  dangNhap: localStorageServ.userInfor.get(),
};

export const localStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_KY_TYPE: {
      state.dangNhap = action.payload;
      localStorageServ.userInfor.set(action.payload);
      return { ...state };
    }
    case DANG_NHAP_TYPE: {
      state.dangNhap = action.payload;
      localStorageServ.userInfor.set(action.payload);
      return { ...state };
    }
    case REMOVE_LOCAL: {
      state.dangNhap = null;
      localStorageServ.userInfor.remove();
      localStorageServ.avatarInfor.remove();
      return { ...state };
    }
    default:
      return state;
  }
};
