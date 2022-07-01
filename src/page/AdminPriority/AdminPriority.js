import React from "react";
import { useHistory } from "react-router-dom";

export default function AdminPriority() {
  const history = useHistory();
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <p>Email: binh97@gmail.com</p>
      <p>password: binh97</p>
      <button
        onClick={() => {
          history.push("/admin");
        }}
        className="text-md bg-blue-500 text-white rounded-lg p-2 cursor-pointer hover:opacity-80"
      >
        Admin Page
      </button>
    </div>
  );
}
