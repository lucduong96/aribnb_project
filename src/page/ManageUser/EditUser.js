import React, { useEffect, useState } from "react";
import { Modal, Button, DatePicker } from "antd";
import { Form, Input } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { capNhatNguoiDungAction } from "../../redux/action/CRUDNguoiDungAction";
import { useHistory } from "react-router-dom";
export default function EditUser() {
  const { editUser } = useSelector((state) => {
    return state.dsNguoiDungPhanTrangReducer;
  });

  const [form] = Form.useForm();
  useEffect(() => {
    let newUser = { ...editUser };

    form.setFieldsValue(newUser);
  }, []);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    const id = values._id;
    // const dayBirthday = moment(values.date).format("YYYY-MM-DD");
    const data = {
      ...values,
      type: "ADMIN",
      gender: true,
      // dayBirthday,
    };

    dispatch(capNhatNguoiDungAction(id, data));
  };

  return (
    <div className="bg-gray-300">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
        className="w-1/2 bg-white mx-auto py-4 pr-24"
      >
        <Form.Item label="ID" name="_id" hasFeedback>
          <Input disabled={true} />
        </Form.Item>
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
          va
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
        {/* <Form.Item
          label="Date of birth"
          name="date"
          rules={[
            { required: true, message: "Please input date of your birth!" },
          ]}
          hasFeedback
        >
          <DatePicker picker="date" placeholder="Chose date of your birth" />
        </Form.Item> */}
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
        <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
