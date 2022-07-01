import React, { createElement, useEffect, useState, useRef } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatDanhGiaAction,
  layDanhGiaAction,
  taoDanhGiaAction,
  xoaDanhGiaAction,
} from "../../redux/action/DanhGiaAction";
import { Pagination } from "antd";
import { EDIT_DANH_GIA } from "../../redux/type/DanhGiaType";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
export default function UserComment({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhGiaAction(id));
  }, []);
  let textInput = useRef();
  const { danhGia, editDanhGia, disabled } = useSelector((state) => {
    return state.DanhGiaReducer;
  });
  const { dangNhap } = useSelector((state) => {
    return state.localStorageReducer;
  });
  const { updateUserAvatar } = useSelector((state) => {
    return state.dsNguoiDungPhanTrangReducer;
  });
  const [comment, setComment] = useState({
    content: "",
  });
  useEffect(() => {
    let newEditDanhGia = editDanhGia?.content;
    setComment({
      content: newEditDanhGia,
    });
  }, [editDanhGia]);
  const handleChange = (e) => {
    let userComment = e.target.value;
    setComment({
      content: userComment,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = comment;
    if (data.content === undefined || data.content.trim() === "") {
      setComment({
        ...comment,
        error: "Please fill in the text area",
      });
    } else {
      dispatch(taoDanhGiaAction(id, data));
      setComment({
        content: "",
      });
    }
    textInput.current.focus();
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const id = editDanhGia._id;
    const data = comment;
    if (data.content.trim() === "" || data.content === undefined) {
      setComment({
        ...comment,
        error: "Please fill in the text area",
      });
    } else {
      dispatch(capNhatDanhGiaAction(id, data));
      setComment({
        content: "",
      });
    }
    textInput.current.focus();
  };
  const newDangNhap = dangNhap?.name;
  const newDanhGia = danhGia?.map((item) => {
    return { ...item, newDangNhap, updateUserAvatar };
  });
  const [action, setAction] = useState(null);
  const numEachPage = 4;
  const [pagination, setPagination] = useState({
    minValue: 0,
    maxValue: 4,
  });
  const handlePagination = (value) => {
    setPagination({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };
  const renderComment = () => {
    return (
      <div>
        {newDanhGia &&
          newDanhGia.length > 0 &&
          newDanhGia
            .slice(pagination.minValue, pagination.maxValue)
            .map((item) => {
              return (
                <Comment
                  actions={[
                    <span
                      onClick={() => {
                        dispatch(xoaDanhGiaAction(item._id));
                      }}
                      key="comment-basic-reply-to"
                    >
                      Xóa
                    </span>,
                    <span
                      onClick={() => {
                        dispatch({
                          type: EDIT_DANH_GIA,
                          payload: item,
                        });
                      }}
                      key="comment-basic-reply-to"
                    >
                      Edit
                    </span>,
                  ]}
                  author={<a>{item.newDangNhap}</a>}
                  avatar={<Avatar src={item.updateUserAvatar} alt="Han Solo" />}
                  content={<p>{item.content}</p>}
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                />
              );
            })}
        <Pagination
          defaultCurrent={1}
          defaultPageSize={numEachPage} //default size of page
          onChange={handlePagination}
          total={newDanhGia.length} //total number of card data available
        />
      </div>
    );
  };
  return (
    <div>
      <div className="flex mx-auto items-center justify-center shadow-lg mt-10 ">
        <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new comment
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                onChange={handleChange}
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                value={comment.content}
                ref={textInput}
              />
              <p className="text-red-500">{comment.error}</p>
            </div>
            <div className="w-full md:w-full flex items-start md:w-full px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                {!disabled ? (
                  <button
                    className="bg-red-500 invisible border-1  p-2 rounded-md text-white hover:opacity-50 hover:border-transparent"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="bg-red-500 border-1  p-2 rounded-md text-white hover:opacity-50 hover:border-transparent"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                )}
              </div>
              <div className="-mr-1">
                {disabled ? (
                  <button
                    disabled
                    onClick={handleSubmit}
                    className="bg-gray-400 invisible text-white p-2 rounded-md cursor-not-allowed"
                    defaultValue="Post Comment"
                  >
                    submit
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-pink-500 text-white p-2 rounded-md cursor-pointer"
                    defaultValue="Post Comment"
                  >
                    submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
        {renderComment()}
      </div>
    </div>
  );
}
