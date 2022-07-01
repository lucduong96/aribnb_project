import {
  CREATE_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  SEARCH_ROOM,
  SET_DRYER,
  SET_GYM,
  SET_HOT_TUB,
  SET_INDOOR_FIRE_PLACE,
  SET_KITCHEN,
  SET_LIST_ROOM,
  SET_POOL,
  SET_THANG_MAY,
  SET_WIFI,
  UPADTE_IMAGE_ROOM,
  UPADTE_ROOM,
} from "../type/layDanhSachPhongType";
const initialState = {
  dsPhong: [],
  dsPhongUtilities: null,
  editPhong: {},
};

export const layDSPhongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_ROOM: {
      state.dsPhong = action.payload;
      return { ...state };
    }
    case CREATE_ROOM: {
      let newDsPhong = [...state.dsPhong];
      newDsPhong.push(action.payload);
      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case DELETE_ROOM: {
      let newDsPhong = [...state.dsPhong];
      let index = newDsPhong.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (index !== -1) {
        newDsPhong.splice(index, 1);
      }
      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case EDIT_ROOM: {
      state.editPhong = action.payload;
      return { ...state };
    }
    case UPADTE_ROOM: {
      let roomUpdate = action.payload;
      state.editPhong = roomUpdate;
      let newDsPhong = [...state.dsPhong];
      let index = newDsPhong.findIndex((item) => {
        return item._id === roomUpdate._id;
      });
      if (index !== -1) {
        newDsPhong[index] = roomUpdate;
      }
      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case UPADTE_IMAGE_ROOM: {
      let roomImgUpdate = action.payload;

      let newDsPhong = [...state.dsPhong];
      let index = newDsPhong.findIndex((item) => {
        return item._id === roomImgUpdate._id;
      });
      if (index !== -1) {
        newDsPhong[index] = roomImgUpdate;
      }
      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case SEARCH_ROOM: {
      let searchResult = action.payload;

      let cloneDsPhong = [...state.dsPhong];

      let newDsPhong = cloneDsPhong.filter((item) => {
        return (
          item.name?.trim().toUpperCase() === searchResult.trim().toUpperCase()
        );
      });

      state.dsPhong = newDsPhong;
      return { ...state };
    }
    case SET_WIFI: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.wifi === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    case SET_THANG_MAY: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.elevator === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    case SET_GYM: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.gym === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    case SET_DRYER: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.dryer === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    case SET_HOT_TUB: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.hotTub === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    case SET_KITCHEN: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.kitchen === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    case SET_POOL: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.pool === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    case SET_INDOOR_FIRE_PLACE: {
      let dsPhongUpdate = [...state.dsPhong];

      if (!action.payload) {
        state.dsPhongUtilities = dsPhongUpdate;

        return { ...state };
      } else {
        let newDsPhong = dsPhongUpdate.filter(
          (item) => item.indoorFireplace === action.payload
        );
        state.dsPhongUtilities = newDsPhong;
        return { ...state };
      }
    }
    default:
      return { ...state };
  }
};
