import React from "react";
import logo from "../../assets/404NotFound1.gif";
import { NavLink, useHistory } from "react-router-dom";
export default function NotFoundPages() {
  const history = useHistory();
  return (
    <div className="mt-24">
      <h1 className=" text-center ">
        <p
          className="text-xl font-bold cursor-pointer hover:text-red-500 text-green-500"
          onClick={() => {
            history.push("/");
          }}
        >
          BACK TO TRANG CHỦ
        </p>
      </h1>
      <img src={logo} className="mx-auto" />
    </div>
  );
}
