import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { layDSPhongAction } from "../../redux/action/layDanhSachPhongAction";
import { Pagination } from "antd";
import {
  SET_DRYER,
  SET_GYM,
  SET_HOT_TUB,
  SET_INDOOR_FIRE_PLACE,
  SET_KITCHEN,
  SET_POOL,
  SET_THANG_MAY,
  SET_WIFI,
} from "../../redux/type/layDanhSachPhongType";

import { useHistory } from "react-router-dom";
export default function ListRoom() {
  const { dsPhong, dsPhongUtilities } = useSelector((state) => {
    return state.layDSPhongReducer;
  });
  const history = useHistory();

  const [pagination, setPagination] = useState({
    minValue: 0,
    maxValue: 10,
  });
  const [Wifi, setWifi] = useState(true);
  const [thangMay, setThangMay] = useState(true);
  const [hotTub, setHotTub] = useState(true);
  const [pool, setPool] = useState(true);
  const [firePlace, setFirePlace] = useState(true);
  const [dryer, setDryer] = useState(true);
  const [gym, setGym] = useState(true);
  const [kitchen, setKitchen] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSPhongAction());
  }, []);
  const numEachPage = 20;
  const handleChange = (value) => {
    setPagination({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };
  const handleWifi = () => {
    setWifi(!Wifi);
    dispatch({
      type: SET_WIFI,
      payload: Wifi,
    });
  };
  const handleThangMay = () => {
    setThangMay(!thangMay);

    dispatch({
      type: SET_THANG_MAY,
      payload: thangMay,
    });
  };
  const handleHotTub = () => {
    setHotTub(!hotTub);

    dispatch({
      type: SET_HOT_TUB,
      payload: hotTub,
    });
  };

  const handlePool = () => {
    setPool(!pool);

    dispatch({
      type: SET_POOL,
      payload: pool,
    });
  };

  const handleFirePlace = () => {
    setFirePlace(!firePlace);

    dispatch({
      type: SET_INDOOR_FIRE_PLACE,
      payload: firePlace,
    });
  };

  const handleDryer = () => {
    setDryer(!dryer);

    dispatch({
      type: SET_DRYER,
      payload: dryer,
    });
  };

  const handleGym = () => {
    setGym(!gym);

    dispatch({
      type: SET_GYM,
      payload: gym,
    });
  };
  const handleKitchen = () => {
    setKitchen(!kitchen);

    dispatch({
      type: SET_KITCHEN,
      payload: kitchen,
    });
  };

  return (
    <div className="mt-24 ">
      <div className=" text-center mb-10">
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={handleWifi}
        >
          Wifi
        </button>
        <button
          onClick={handleThangMay}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Thang Máy
        </button>
        <button
          onClick={handleHotTub}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Bồn nóng
        </button>
        <button
          onClick={handlePool}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Hồ bơi
        </button>
        <button
          onClick={handleFirePlace}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Lò sưởi trong nhà
        </button>
        <button
          onClick={handleDryer}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Máy sấy tóc
        </button>
        <button
          onClick={handleGym}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Gym
        </button>
        <button
          onClick={handleKitchen}
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Bếp
        </button>
      </div>
      {dsPhongUtilities === null ? (
        <div className="container mx-auto space-y-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 container mx-auto p-0">
            {dsPhong &&
              dsPhong.length > 0 &&
              dsPhong
                .slice(pagination.minValue, pagination.maxValue)
                .map((phong, index) => {
                  return (
                    <div
                      key={phong._id}
                      className="relative items-center w-80 lg:py-8 md:py-8 py-0 lg:rounded-3xl md:rounded-3xl sm:rounded-none rounded-3xl text-center bg-white border shadow-md md:flex-row md:max-w-xl cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 ease-in-out"
                    >
                      <img
                        className="object-cover w-full mx-auto h-96 rounded-3xl md:h-auto md:w-48 md:rounded-lg sm:rounded-lg"
                        src={
                          phong.image
                            ? phong.image
                            : "https://picsum.photos/200"
                        }
                        alt
                      />
                      <div className="flex flex-col justify-between p-2 leading-normal">
                        <span className="mb-2 text-sm font-semibold ">
                          {phong.name}
                        </span>
                        <p className="m-0 text-sm text-gray-400">
                          {phong.description?.length >= 50
                            ? phong.description.slice(0, 50) + "..."
                            : phong.description}
                        </p>
                        <div className="flex flex-row justify-center text-sm text-gray-400">
                          <span>Guests: {phong.guests} - </span>
                          <span>Bedroom: {phong.bedroom} - </span>
                          <span>Bathroom: {phong.bath} </span>
                        </div>
                        <p className=" text-sm mt-2 text-center space-x-5">
                          <span className="font-bold text-sm">VND </span>
                          {phong.price.toLocaleString()}/night
                        </p>
                        <div>
                          <button
                            onClick={() => {
                              history.push(`/detailroom/${phong._id}`);
                            }}
                            className="rounded-3xl text-sm border-2 border-solid border-gray-300 hover:bg-red-800 transition-all duration-500 ease-in-out hover:cursor-pointer px-3 py-2"
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <Pagination
            defaultCurrent={1}
            onChange={handleChange}
            total={dsPhong.length}
          />
        </div>
      ) : (
        <div className="container mx-auto space-y-8">
          <div className="grid lg:grid-cols-3 gap-12 container mx-auto p-0">
            {dsPhongUtilities &&
              dsPhongUtilities.length > 0 &&
              dsPhongUtilities
                .slice(pagination.minValue, pagination.maxValue)
                .map((phong, index) => {
                  return (
                    <div
                      key={phong._id}
                      className="relative items-center w-80 lg:py-8 md:py-8 py-0 rounded-3xl text-center bg-white border shadow-md md:flex-row md:max-w-xl cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 ease-in-out"
                    >
                      <img
                        className="object-cover w-full mx-auto h-96 rounded-3xl md:h-auto md:w-48 md:rounded-lg sm:rounded-lg"
                        src={
                          phong.image
                            ? phong.image
                            : "https://picsum.photos/200"
                        }
                        alt="img"
                      />
                      <div className="flex flex-col justify-between p-2 leading-normal">
                        <span className="mb-2 text-sm font-semibold ">
                          {phong.name}
                        </span>
                        <p className="m-0 text-sm text-gray-400">
                          {phong.description?.length >= 50
                            ? phong.description.slice(0, 50) + "..."
                            : phong.description}
                        </p>
                        <div className="flex flex-row justify-center text-sm text-gray-400">
                          <span>Guests: {phong.guests} - </span>
                          <span>Bedroom: {phong.bedroom} - </span>
                          <span>Bathroom: {phong.bath} </span>
                        </div>
                        <p className=" text-sm mt-2 text-center space-x-5">
                          <span className="font-bold text-sm">VND </span>
                          {phong.price.toLocaleString()}/night
                        </p>
                        <div>
                          <button
                            onClick={() => {
                              history.push(`/detailroom/${phong._id}`);
                            }}
                            className="rounded-3xl text-sm border-2 border-solid border-gray-300 hover:bg-red-800 transition-all duration-500 ease-in-out hover:cursor-pointer px-3 py-2"
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <Pagination
            defaultCurrent={1}
            onChange={handleChange}
            total={dsPhongUtilities.length}
          />
        </div>
      )}
    </div>
  );
}
