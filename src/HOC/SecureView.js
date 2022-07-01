import React from "react";
import localStorageServ from "../serviceWorker/locaStorage.service";
export default function SecureView({ Component }) {
  const UserInfor = localStorageServ.userInfor.get();
  return UserInfor?.accessToken && UserInfor.type === "ADMIN"
    ? Component
    : window.location.assign("/login");
}
