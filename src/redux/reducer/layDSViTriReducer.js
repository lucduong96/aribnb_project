import { SET_LIST_LOCATION } from "../type/layDanhSachViTriType";

const initialState = {
  dsViTri: [],
};

export const layDSViTriReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_LOCATION: {
      state.dsViTri = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};
