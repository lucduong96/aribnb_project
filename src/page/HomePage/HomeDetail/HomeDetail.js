import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "antd";
import { layDSViTriAction } from "../../../redux/action/layDanhSachViTriAction";
import { NavLink } from "react-router-dom";
import InputSearch from "../Header/InputSearch";
import { BsFillArrowRightCircleFill } from "react-icons/bs/index";
import { AiOutlineArrowRight } from "react-icons/ai/index";
import ANIMATION from "../../../assets/animation1.gif";
import BG from "../../../assets/bg1.gif";
import TypewriterComponent from "typewriter-effect";
import { useHistory } from "react-router-dom";
export default function HomeDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSViTriAction());
  }, []);
  const { dsViTri } = useSelector((state) => {
    return state.layDSViTriReducer;
  });
  const renderLocation = () => {
    return dsViTri?.slice(1, 10).map((vitri, index) => {
      return (
        <div
          key={index}
          className="space-x-2 my-10 rounded-3xl overflow-hidden text-white text-xl font-bold lg:text-white lg:text-3xl lg:font-bold md:text-white md:text-3xl md:font-bold "
        >
          <div>
            <div
              style={{
                width: "100%",
                borderRadius: "10px",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                alt="example"
                src={
                  vitri.image ? vitri.image : "https://picsum.photos/252/206"
                }
                className={"hover:shadow-2xl"}
                style={{
                  width: "100%",
                  height: "206px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <p className="text-center">{vitri.province}</p>
                <p>{vitri.name}</p>

                <button
                  onClick={() => {
                    history.push("/room");
                  }}
                  className="my-0 mx-auto space-x-2 flex justify-center items-center rounded-3xl lg:px-3 lg:py-2 md:px-3 md:py-2 px-2 py-1 text-sm lg:text-base md:text-base border-2 border-solid border-primary hover:bg-primary transition-all duration-500 ease-in-out hover:text-white font-medium"
                >
                  <span>Explore</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderListSearch = () => {
    return dsViTri?.map((item) => {
      return (
        <li
          onClick={() => {
            history.push("/room");
          }}
          className="flex items-center hover:rounded-tl-lg hover:rounded-bl-lg hover:bg-pink-500 hover:text-white transition-all duration-500 ease-in-out"
        >
          <img
            className={
              "rounded-lg object-cover object-center w-12 h-12 flex-shrink"
            }
            src={item.image ? item.image : ANIMATION}
          />
          <p className="flex-grow font-normal text-lg m-0">{item.name}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <div className="relative ">
        <img
          src="https://projectairbnb.vercel.app/static/media/heroImgOne.d825d7d1a6d9c90b5df1.jpg"
          className=" object-cover object-center mx-auto"
        />
        <div className="lg:block md:block hidden absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl">
          <TypewriterComponent
            onInit={(typewrite) => {
              typewrite
                .typeString("Welcome to my Airbnb project")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div id="searchInput">
          <InputSearch dsViTri={dsViTri} />
          <button className="location group relative bg-white p-0 w-80 transition-all duration-500 ease-in-out">
            <p className=" m-0 text-gray-400 text-lg">Where do you want go?</p>
            <div className="downshow_location hidden lg:group-hover:block md:group-focus:block group-focus:block">
              <p className="lg:pt-3 md:pt-3 pt-1 font-medium lg:text-lg md:text-lg text-base text-gray-400">
                Đi bất cứ đâu, bất cứ lúc nào
              </p>
              <div
                onClick={() => {
                  history.push("/room");
                }}
                className="flex justify-between items-center rounded-3xl px-2 shadow-lg text-pink-600"
              >
                <p className="text-primary mb-0.5 font-medium text-xl ">
                  Tôi linh hoạt
                </p>
                <BsFillArrowRightCircleFill className="text-primary font-medium text-2xl pb-1" />
              </div>
            </div>
            <div className="list_location hidden group-focus:block transition-all duration-500 ease-in-out">
              <ul className="pt-3 space-y-3">{renderListSearch()}</ul>
            </div>
          </button>
          <div className="searchButton">
            <button className="setButton">Search</button>
          </div>
        </div>
      </div>
      <div className="container my-5 mx-auto py-5 lg:z-0 md:z-0 sm:z-0">
        {renderLocation()}
      </div>

      <div className="relative my-5">
        <img src={BG} className="object-cover object-center mx-auto w-full" />
        <div className="absolute text-lg left-1/2 transform top-10 -translate-x-1/2 md:text-6xl lg:text-6xl font-medium text-white">
          <div className="flex items-center space-x-3">
            <span>Find Nearby</span>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Places")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Hotels")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Resorts")
                  .start();
              }}
            />
          </div>
          <div className="text-gray-300 lg:text-2xl md:text-2xl text-lg">
            Explore top-rated attractions, activities and more!
          </div>
          <button
            onClick={() => {
              history.push("/room");
            }}
            className={
              "lg:p-3 md:p-3 p-2 rounded-full ;g:font-bold lg:text-lg md:font-bold md:text-lg font-medium text-base  border-white border-solid border-1 text-white hover:bg-primary hover:text-white hover:border-transparent transition-all duration-500 ease-in-out "
            }
          >
            Let's Explore
          </button>
        </div>
      </div>
    </div>
  );
}
