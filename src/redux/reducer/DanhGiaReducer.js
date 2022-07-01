import {
  CAP_NHAT_DANH_GIA,
  EDIT_DANH_GIA,
  LAY_DANH_GIA,
  TAO_DANH_GIA,
  XOA_DANH_GIA,
} from "../type/DanhGiaType";
const initialState = {
  danhGia: [],
  editDanhGia: null,
  disabled: false,
};
export const DanhGiaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_GIA: {
      state.danhGia = action.payload;
      return { ...state };
    }
    case TAO_DANH_GIA: {
      let cloneDanhGia = [...state.danhGia, action.payload];
      state.danhGia = cloneDanhGia;
      return { ...state };
    }
    case XOA_DANH_GIA: {
      let cloneDanhGia = [...state.danhGia];
      let index = cloneDanhGia.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (index !== -1) {
        cloneDanhGia.splice(index, 1);
      }
      state.danhGia = cloneDanhGia;
      return { ...state };
    }
    case EDIT_DANH_GIA: {
      state.editDanhGia = action.payload;
      state.disabled = true;
      return { ...state };
    }
    case CAP_NHAT_DANH_GIA: {
      state.editDanhGia = action.payload;
      let cloneDanhGia = [...state.danhGia];

      let index = cloneDanhGia.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (index !== -1) {
        cloneDanhGia[index] = action.payload;
      }
      state.danhGia = cloneDanhGia;
      state.disabled = false;
      return { ...state };
    }
    default:
      return state;
  }
};
