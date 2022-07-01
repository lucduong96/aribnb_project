import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { Modal, Button, DatePicker } from "antd";
import { Form, Input } from "antd";
import moment from "moment";
import { themNguoiDungAction } from "../../redux/action/CRUDNguoiDungAction";
export default function ModalThemUser() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const onFinish = (values) => {
    const dayBirthday = moment(values.date).format("YYYY-MM-DD");
    const data = {
      ...values,
      type: "ADMIN",
      gender: true,
      dayBirthday,
    };
    dispatch(themNguoiDungAction(data));
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Thêm Quản trị viên
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="User name"
            name="name"
            rules={[
              { required: true, message: "Please input your username!" },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Your Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Your phone"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone!" },
              {
                pattern: new RegExp(/^[0-9]+$/),
                message: "Your phone number is invalid!",
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date of birth"
            name="date"
            rules={[
              { required: true, message: "Please input date of your birth!" },
            ]}
            hasFeedback
          >
            <DatePicker picker="date" placeholder="Chose date of your birth" />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                message: "Please input your username!",
                required: true,
              },
              { type: "email" },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 3 },
              { whitespace: true },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              onClick={() => {
                // form.resetFields();
                // setIsModalVisible(false);
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
