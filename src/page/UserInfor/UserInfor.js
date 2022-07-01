import React, { useState } from "react";
import { AiOutlineCheck, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { capNhatNguoiDungAvatarAction } from "../../redux/action/CRUDNguoiDungAction";
export default function UserInfor() {
  const history = useHistory();
  const { dangNhap } = useSelector((state) => {
    return state.localStorageReducer;
  });
  const { updateUserAvatar } = useSelector((state) => {
    return state.dsNguoiDungPhanTrangReducer;
  });

  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState("");
  const [fileAvatar, setFileAvatar] = useState("");
  const handleAvatar = (e) => {
    let file = e.target.files[0];
    setFileAvatar(file);

    if (
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png" ||
      file.type === "image/jpeg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };
  const updateAvatar = () => {
    let formData = new FormData();

    formData.append("avatar", fileAvatar, fileAvatar.name);
    dispatch(capNhatNguoiDungAvatarAction(formData));
  };
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 container mx-auto mt-24 ">
      <div className="border-1 hover:shadow-lg p-3 w-80 rounded-lg">
        <img
          className="mx-auto rounded-full my-3"
          src={updateUserAvatar}
          style={{ width: "150px", height: "150px" }}
        />
        <div className="text-center">
          <h3>Xác minh danh tính</h3>
          <p>Xác thực danh tính của bạn với huy hiệu xác minh danh tính.</p>
          <button
            onClick={() => {
              history.push("/adminPriority");
            }}
            className="p-3 border-2 rounded-lg border-black text-md my-3"
          >
            Quản lý Admin
          </button>
          <h3>{dangNhap?.name} đã xác nhận:</h3>
          <p className="flex flex-row justify-center items-center">
            <AiOutlineCheck /> <span>Địa chỉ email</span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl">Xin chào, tôi tên là {dangNhap?.name}</h1>
        <p>Bắt đầu tham gia vào năm 2022</p>
        <h1 className="text-xl">Giới thiệu</h1>
        <p>Yêu màu hồng ghét sự giả dối</p>
        <h1 className="flex flex-row justify-start items-center">
          <AiFillStar className="text text-xl" />
          <span className="text-xl">đánh giá</span>
        </h1>
        <h1 className="my-3 text-lg text-green-500 font-medium">
          Update your avatar
        </h1>
        <input
          type="file"
          onChange={handleAvatar}
          accept="image/jpeg, image/png, image/gif, image/jpg"
        />
        <img
          src={imgSrc}
          style={{ width: "150px", height: "150px", marginTop: "5px" }}
        />
        {fileAvatar === "" ? (
          <button
            disabled
            className="p-3 border-2 bg-gray-300 cursor-not-allowed rounded-lg hover:opacity-70 text-md my-3"
          >
            Cập nhật Avatar
          </button>
        ) : (
          <button
            onClick={updateAvatar}
            className="p-3 border-2 rounded-lg hover:opacity-70 hover:bg-red-300 hover:text-white border-black hover:border-white text-md my-3"
          >
            Cập nhật Avatar
          </button>
        )}
      </div>
    </div>
  );
}
