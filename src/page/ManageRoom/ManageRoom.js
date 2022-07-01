import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message } from "antd";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatHinhAnhPhongAction,
  layDSPhongAction,
  xoaPhongAction,
} from "../../redux/action/layDanhSachPhongAction";
import { AiFillEdit } from "react-icons/ai/index";
import { BsFillTrashFill } from "react-icons/bs/index";
import { useHistory } from "react-router-dom";
import { EDIT_ROOM, SEARCH_ROOM } from "../../redux/type/layDanhSachPhongType";
import localStorageServ from "../../serviceWorker/locaStorage.service";
const { Search } = Input;

export default function ManageRoom() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const { dsPhong } = useSelector((state) => {
    return state.layDSPhongReducer;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(layDSPhongAction());
  }, []);
  const handleImg = (e) => {
    //lấy file ra từ e
    const file = e.target.files[0];
    const id = e.target.id;
    //Tạo đổi tượng để đọc file
    if (
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png" ||
      file.type === "image/jpeg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // setImgSrc(e.target.result);
      };
      let formData = new FormData();
      formData.append("room", file, file.name);
      dispatch(capNhatHinhAnhPhongAction(id, formData));
    }
  };

  const columns = [
    {
      title: "Mã Phòng",
      dataIndex: "_id",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a._id - b._id,
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Tên phòng",
      dataIndex: "name",
      //   sorter: (a, b) => {
      //     let nameRoomA = a.name.toLowerCase().trim();
      //     let nameRoomB = b.name.toLowerCase().trim();
      //     if (nameRoomA > nameRoomB) {
      //       return 1;
      //     }
      //     return -1;
      //   },
      sortDirections: ["descend"],
      width: "25%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      render: (text, room, index) => {
        return (
          <div>
            <img
              src={
                room.image
                  ? room.image
                  : `https://picsum.photos/id/${index}/50/50`
              }
              alt={room.image}
              width="50px"
              height="50px"
            />
            <input
              id={room._id}
              className="my-2"
              type="file"
              onChange={handleImg}
              accept="image/jpeg, image/png, image/gif, image/jpg"
            />
            {/* <img style={{ width: 50, height: 50 }} src={imgSrc} alt="" /> */}
          </div>
        );
      },
      width: "10%",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      render: (text, room, index) => {
        return (
          <p>
            {room.description.length > 50
              ? room.description.slice(0, 50) + "..."
              : room.description}
          </p>
        );
      },
      width: "35%",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, room, index) => {
        return (
          <div className="flex flex-row justify-between items-center">
            <Button
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              <BsFillTrashFill className="text-red-500 text-lg cursor-pointer" />
            </Button>
            <Modal
              title="Xóa Phòng"
              visible={isModalVisible}
              onOk={() => {
                dispatch(xoaPhongAction(room._id));
                setIsModalVisible(false);
              }}
              onCancel={() => {
                setIsModalVisible(false);
              }}
            >
              Bạn có chắc muốn xóa phòng này không?
            </Modal>
            <AiFillEdit
              onClick={() => {
                history.push(`/editRoom/${room._id}`);
                dispatch({
                  type: EDIT_ROOM,
                  payload: room,
                });
              }}
              className="text-blue-500 text-lg cursor-pointer"
            />
          </div>
        );
      },
      width: "10%",
    },
  ];
  const data = dsPhong;
  const onSearch = (value) => {
    dispatch({
      type: SEARCH_ROOM,
      payload: value,
    });
  };
  const handleSearch = (e) => {
    const tenPhong = e.target.value;
    dispatch({
      type: SEARCH_ROOM,
      payload: tenPhong,
    });
  };
  function onChange(pagination, filters, sorter, extra) {}
  return localStorageServ.userInfor.get() &&
    localStorageServ.userInfor.get().type === "ADMIN" ? (
    <div>
      <h3>Quản lý Phim</h3>
      <button
        onClick={() => {
          history.push("/addRoom");
        }}
        className="text-md bg-red-500 p-2 rounded-md text-white"
      >
        Thêm Room
      </button>
      <Search
        className="my-5"
        placeholder="input search text"
        onSearch={onSearch}
        onKeyUp={handleSearch}
        enterButton
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  ) : (
    setTimeout(() => {
      history.push("/login");
      message.error("Sorry, Bạn không đủ quyền truy cập");
    }, [500])
  );
}
