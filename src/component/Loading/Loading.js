import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/HMSLoading.gif";
export default function Loading() {
  const { isLoading } = useSelector((state) => {
    return state.LoadingReducer;
  });
  return isLoading ? (
    <div className="fixed flex top-0 right-0 left-0 bg-white justify-center items-center w-screen h-screen z-30">
      <img src={logo} />
    </div>
  ) : (
    <></>
  );
}
