import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { layChiTietPhongAction } from "../../redux/action/layChiTietPhongAction";
import { Modal, Button } from "antd";
import { Select } from "antd";
import { WifiOutlined, StarOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import UserComment from "./UserComment";
import {
  MdElevator,
  MdPool,
  MdFireplace,
  MdKitchen,
  MdCable,
} from "react-icons/md/index";
import { FaHotTub, FaHandsWash } from "react-icons/fa/index";
import { CgGym } from "react-icons/cg/index";
import { GiFire } from "react-icons/gi/index";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { datPhongAction } from "../../redux/action/datPhongAction";
import localStorageServ from "../../serviceWorker/locaStorage.service";
const { Option, OptGroup } = Select;
export default function DetailRoom() {
  const { chiTietPhong } = useSelector((state) => {
    return state.layChiTietPhongReducer;
  });
  const priceRoomday = chiTietPhong?.price;
  const [priceRoom, setPriceRoom] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [allowCheckIn, setAllowCheckIn] = useState(false);
  const [allowCheckOut, setAllowCheckOut] = useState(false);
  const [numDay, setNumDay] = useState();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTietPhongAction(id));
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function handleChange(value) {}

  function handleCheckIn(value, checkIn) {
    setCheckInDate(checkIn);
    setAllowCheckIn(true);
  }
  function handleCheckOut(value, checkOut) {
    setCheckOutDate(checkOut);
    setAllowCheckOut(true);
  }
  const datPhong = () => {
    let day1 = new Date(checkInDate);
    let day2 = new Date(checkOutDate);
    let difference = Math.abs(day2 - day1);
    let numDateStays = difference / (1000 * 3600 * 24);
    setNumDay(numDateStays);
    let tongTien = numDateStays * priceRoomday;
    setPriceRoom(tongTien);
    let infoRoom = {
      roomId: id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
    };
    if (localStorageServ.userInfor.get()) {
      dispatch(datPhongAction(infoRoom));
    } else {
      history.push("/login");
    }
  };
  return (
    <div
      style={{ margin: "0 10px" }}
      className="lg:container md:container lg:mx-auto md:mx-auto lg:mt-24 md:mt-24 mt-24"
    >
      <div className="flex flex-row items-center justify-center rounded-lg shadow-xl space-x-6 py-6 hover:bg-primary hover:text-white">
        <div className="flex flex-col justify-center items-center">
          <img
            src={
              chiTietPhong?.image
                ? chiTietPhong?.image
                : "http://picsum.photos/200"
            }
            className={"rounded-lg shadow-xl"}
          />
          <hr />
        </div>
        <div className="p-4 rounded-lg shadow-xl">
          <p className="font-semibold">{chiTietPhong?.name}</p>
          <p className="text-sm font-normal">
            {chiTietPhong?.description.length >= 50
              ? chiTietPhong?.description.slice(0, 50) + "..."
              : chiTietPhong?.description}
          </p>
          <p className="mt-3">
            Phòng ngủ:
            {chiTietPhong?.bedroom ? chiTietPhong.bedroom : " Đang cập nhật"} -
            Phòng khách:
            {chiTietPhong?.guests ? chiTietPhong.guests : " Đang cập nhật"} -
            Nhà vệ sinh:
            {chiTietPhong?.bath ? chiTietPhong.bath : " Đang cập nhật"}
          </p>
          <p className="text-sm mt-2 space-x-5">
            <span className="font-bold text-sm">VND </span>
            {priceRoomday?.toLocaleString()}/night
          </p>
          <>
            <Button
              style={{
                borderRadius: "10px",
                textAlign: "right",
                color: "#ec4899",
              }}
              onClick={showModal}
            >
              Detail
            </Button>
            <Modal
              title="Thông tin chi tiết"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <h1 className="text-xl  font-bold">Giới thiệu về nơi này</h1>
              <p className="text-gray-500">{chiTietPhong?.description}</p>
              <h3 className="text-xl font-bold">Chổ ở:</h3>
              <p className="text-gray-500">sạch sẽ, rộng rãi, gần bờ hồ</p>
              <h3 className="text-xl font-bold">
                Tiện nghi khách có quyền sử dụng:
              </h3>
              <p className="text-gray-500">Tất cả</p>
              <h3 className="text-xl font-bold">Giá Phòng</h3>
              <div className="flex flex-row justify-between items-center">
                <p className="text-lg ">
                  <span className="font-bold">VND </span>
                  {priceRoomday?.toLocaleString()}
                </p>
                <p className="text-lg font-bold">/day</p>
              </div>
            </Modal>
          </>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-12 space-y-8">
        <div>
          <h1 className="text-2xl">Nơi này có những gì cho bạn</h1>
          <div className="grid grid-cols-2">
            <div className=" justify-start items-center flex flex-row space-x-2">
              <WifiOutlined className="text-2xl text-primary" />
              {chiTietPhong?.wifi ? (
                <p className="utility">Wifi</p>
              ) : (
                <del className="utility_del">Wifi</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <MdFireplace className="text-2xl text-primary" />
              {chiTietPhong?.indoorFireplace ? (
                <p className="utility">IndoorFirePlace</p>
              ) : (
                <del className="utility">IndoorFirePlace</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <MdElevator className="text-2xl text-primary" />
              {chiTietPhong?.elevator ? (
                <p className="utility">Thang Máy</p>
              ) : (
                <del className="utility">Thang Máy</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <FaHotTub className="text-2xl text-primary" />
              {chiTietPhong?.hotTub ? (
                <p className="utility">Hot Tub</p>
              ) : (
                <del className="utility">Hot Tub</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <MdPool className="text-2xl text-primary" />
              {chiTietPhong?.pool ? (
                <p className="utility">Pool</p>
              ) : (
                <del className="utility">Pool</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <FaHandsWash className="text-2xl text-primary" />
              {chiTietPhong?.dryer ? (
                <p className="utility">Dryer</p>
              ) : (
                <del className="utility">Dryer</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <CgGym className="text-2xl text-primary" />
              {chiTietPhong?.gym ? (
                <p className="utility">Gym</p>
              ) : (
                <del className="utility">Gym</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <MdKitchen className="text-2xl text-primary" />
              {chiTietPhong?.kitchen ? (
                <p className="utility">Kitchen</p>
              ) : (
                <del className="utility">Kitchen</del>
              )}
            </div>
            <div className="justify-start items-center flex flex-row space-x-2">
              <GiFire className="text-2xl text-primary" />
              {chiTietPhong?.heating ? (
                <p className="utility">Heading</p>
              ) : (
                <del className="utility">Heading</del>
              )}
            </div>
            <div className="items-center flex flex-row justify-start space-x-2">
              <MdCable className="text-2xl text-primary" />
              {chiTietPhong?.cableTV ? (
                <p className="utility">CableTV</p>
              ) : (
                <del className="utility">CableTV</del>
              )}
            </div>
          </div>
        </div>
        <div className="w-327 h-460 rounded-3xl border-solid border-2 border-primary shadow-lg p-4 my-0 mx-auto">
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <h3>{priceRoom.toLocaleString()} VND/</h3>
                <span>{numDay} days</span>
              </div>
              <div className="flex flex-row justify-center items-center">
                <StarOutlined />
                <span>8 - đánh giá</span>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center space-x-3">
                <Space
                  style={{ borderRadius: "20px" }}
                  direction="vertical"
                  size={12}
                >
                  <DatePicker
                    onChange={handleCheckIn}
                    placeholder={"Check in"}
                  />
                </Space>
                <Space direction="vertical" size={12}>
                  <DatePicker
                    onChange={handleCheckOut}
                    placeholder={"Check out"}
                  />
                </Space>
              </div>
              <Select
                defaultValue="lucy"
                style={{ width: "100%", margin: "10px 0 10px 0" }}
                onChange={handleChange}
              >
                <OptGroup label="Trẻ em">
                  <Option value="jack">1-5 tuổi</Option>
                  <Option value="lucy">5-15 tuổi</Option>
                </OptGroup>
                <OptGroup label="Người lớn">
                  <Option value="Yiminghe"> 18 tuổi trở lên </Option>
                </OptGroup>
              </Select>
              {allowCheckIn && allowCheckOut ? (
                <div
                  onClick={datPhong}
                  className="focus:outline-none cursor-pointer  text-center text-white bg-pink-500 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2  w-full"
                >
                  <button className="font-bold text-lg" type="button">
                    Đặt Phòng
                  </button>
                </div>
              ) : (
                <div className="focus:outline-none bg-gray-500 opacity-75 text-center text-white cursor-not-allowed hover:bg-gray-400  font-medium rounded-lg text-sm px-5 py-4 mr-2 mb-2 w-full">
                  <button
                    disabled
                    className="font-bold text-lg cursor-not-allowed"
                    type="button"
                  >
                    Đặt Phòng
                  </button>
                </div>
              )}
              <div>
                <div className="flex flex-row justify-between items-center">
                  <p>{priceRoom.toLocaleString()} VND x day</p>
                  <p>{priceRoom.toLocaleString()} VND</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-between items-center">
                  <p>Phí dịch vụ</p>
                  <p>$0</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-row justify-between items-center">
                <p className="text-xl font-bold">Tổng trước thuế</p>
                <p className="text-xl font-bold">
                  {priceRoom.toLocaleString()} VND
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-row justify-start items-center ">
          <StarOutlined className="text-lg mb-1 mr-1" />
          <span className=" text-lg font-bold">5 - đánh giá</span>
        </div>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="justify-start items-center flex flex-row space-x-2 mr-10 ">
            <div className="m-0 flex-shrink-0 w-1/2">Mức độ sách sẽ</div>
            <Progress
              strokeColor={"#ec4899"}
              percent={80}
              size="small"
              className="flex-grow"
            />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Độ chính xác</div>
            <Progress
              strokeColor={"#ec4899"}
              percent={80}
              size="small"
              className="flex-grow"
            />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Liên lạc</div>
            <Progress
              strokeColor={"#ec4899"}
              percent={80}
              size="small"
              className="flex-grow"
            />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Vị Trí</div>
            <Progress
              strokeColor={"#ec4899"}
              percent={80}
              size="small"
              className="flex-grow"
            />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Nhận phòng</div>
            <Progress
              strokeColor={"#ec4899"}
              percent={80}
              size="small"
              className="flex-grow"
            />
          </div>
          <div className="justify-start items-center flex flex-row space-x-2 mr-10">
            <div className="m-0 flex-shrink-0 w-1/2">Giá trị</div>
            <Progress
              strokeColor={"#ec4899"}
              percent={80}
              size="small"
              className="flex-grow"
            />
          </div>
        </div>
      </div>
      <div>
        <UserComment id={id} />
      </div>
    </div>
  );
}
