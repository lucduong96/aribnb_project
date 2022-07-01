import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../type/LoadingType";

const initialState = {
  isLoading: false,
  count: 0,
};
export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_LOADING: {
      state.count++;
      state.isLoading = true;
      return { ...state };
    }
    case TURN_OFF_LOADING: {
      state.count--;
      if (state.count === 0) {
        state.isLoading = false;
      }
      return { ...state };
    }

    default:
      return state;
  }
};
