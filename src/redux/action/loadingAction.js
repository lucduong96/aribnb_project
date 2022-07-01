import { TURN_ON_LOADING, TURN_OFF_LOADING } from "../type/LoadingType";
export const set_loading_start = () => ({
  type: TURN_ON_LOADING,
});
export const set_loading_end = () => ({
  type: TURN_OFF_LOADING,
});
