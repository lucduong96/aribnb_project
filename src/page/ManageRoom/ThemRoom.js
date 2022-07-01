import React, { useEffect, useState } from "react";

import { Form, Input, Button, Switch, InputNumber } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { capNhatNguoiDungAction } from "../../redux/action/CRUDNguoiDungAction";
import { useHistory } from "react-router-dom";
import { taoPhongAction } from "../../redux/action/layDanhSachPhongAction";
export default function ThemRoom() {
  const { editUser } = useSelector((state) => {
    return state.dsNguoiDungPhanTrangReducer;
  });
  const [utilities, setUtilities] = useState({
    elevator: false,
    hotTub: false,
    pool: false,
    hotTub: false,
    indoorFireplace: false,
    dryer: false,
    gym: false,
    kitchen: false,
    wifi: false,
    heating: false,
    cableTV: false,
  });
  const [form] = Form.useForm();
  useEffect(() => {
    let newUser = { ...editUser };
    // setUser(newUser);
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
  function onChangeGuest(value) {}
  function onChangeBedRoom(value) {}
  function onChangeBathRoom(value) {}
  function onChangeElevator(checked) {
    setUtilities({
      ...utilities,
      elevator: checked,
    });
  }

  function onChangeHotTub(checked) {
    setUtilities({
      ...utilities,
      hotTub: checked,
    });
  }
  function onChangePool(checked) {
    setUtilities({
      ...utilities,
      pool: checked,
    });
  }
  function onChangeIndoorFireplace(checked) {
    setUtilities({
      ...utilities,
      indoorFireplace: checked,
    });
  }
  function onChangeDryer(checked) {
    setUtilities({
      ...utilities,
      dryer: checked,
    });
  }
  function onChangeGym(checked) {
    setUtilities({
      ...utilities,
      gym: checked,
    });
  }
  function onChangeKitchen(checked) {
    setUtilities({
      ...utilities,
      kitchen: checked,
    });
  }
  function onChangeWifi(checked) {
    setUtilities({
      ...utilities,
      wifi: checked,
    });
  }
  function onChangeHeating(checked) {
    setUtilities({
      ...utilities,
      heating: checked,
    });
  }
  function onChangeCableTV(checked) {
    setUtilities({
      ...utilities,
      cableTV: checked,
    });
  }
  const onFinish = (values) => {
    const data = {
      ...values,
      locationId: null,
    };
    const newData = { ...data, ...utilities };

    dispatch(taoPhongAction(newData));
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
        <Form.Item
          label="Tên Phòng"
          name="name"
          rules={[
            { required: true, message: "Please input your tên Phòng!" },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price Room"
          name="price"
          rules={[
            { required: true, message: "Please input your Price Room!" },
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Your Price Room is invalid!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          // initialValues={0}
          name="guests"
          width="200px"
          label="guests"
          rules={[{ required: true, message: "Please input your guests!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: 200 }}
            onChange={onChangeGuest}
          />
        </Form.Item>
        <Form.Item
          // initialValues={0}
          name="bedRoom"
          label="bedroom"
          rules={[{ required: true, message: "Please input your bedroom!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: 200 }}
            onChange={onChangeBedRoom}
          />
        </Form.Item>
        <Form.Item
          // initialValues={0}
          name="bath"
          label="bath"
          rules={[{ required: true, message: "Please input your bath!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: 200 }}
            onChange={onChangeBathRoom}
          />
        </Form.Item>
        <Form.Item name="elevator" label="elevator" valuePropName="checked">
          <Switch onChange={onChangeElevator} />
        </Form.Item>
        <Form.Item label="hotTub" valuePropName="checked">
          <Switch onChange={onChangeHotTub} />
        </Form.Item>
        <Form.Item label="pool" valuePropName="checked">
          <Switch onChange={onChangePool} />
        </Form.Item>
        <Form.Item label="indoorFireplace" valuePropName="checked">
          <Switch onChange={onChangeIndoorFireplace} />
        </Form.Item>
        <Form.Item label="dryer" valuePropName="checked">
          <Switch onChange={onChangeDryer} />
        </Form.Item>
        <Form.Item label="gym" valuePropName="checked">
          <Switch onChange={onChangeGym} />
        </Form.Item>
        <Form.Item label="kitchen" valuePropName="checked">
          <Switch onChange={onChangeKitchen} />
        </Form.Item>
        <Form.Item label="wifi" valuePropName="checked">
          <Switch onChange={onChangeWifi} />
        </Form.Item>
        <Form.Item label="heating" valuePropName="checked">
          <Switch onChange={onChangeHeating} />
        </Form.Item>
        <Form.Item label="cableTV" valuePropName="checked">
          <Switch onChange={onChangeCableTV} />
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          rules={[{ required: true, message: "Please input Intro" }]}
        >
          <Input.TextArea showCount maxLength={100} />
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
