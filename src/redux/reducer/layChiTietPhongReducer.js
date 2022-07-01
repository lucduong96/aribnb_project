import { SET_DETAIL_ROOM } from "../type/layChiTietPhongType";

const initialState = {
  chiTietPhong: null,
};

export const layChiTietPhongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL_ROOM: {
      state.chiTietPhong = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
