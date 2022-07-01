import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { NavLink, useHistory } from "react-router-dom";
export default function InputSearch({ dsViTri }) {
  const cloneDsViTri = dsViTri.map((vitri) => {
    return { value: vitri.province, id: vitri._id };
  });
  const options = cloneDsViTri;
  const history = useHistory();
  const searchResult = (value) =>
    dsViTri.map((vitri, index) => {
      const category = `${vitri.province}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className={"hover:bg-pink-500 hover:text-black "}
            onClick={() => {
              history.push("/room");
            }}
          >
            <NavLink to="/room">{vitri.province} </NavLink>
            <span className="ml-auto">
              <EnvironmentOutlined />
            </span>
          </div>
        ),
      };
    });
  const [lists, setLists] = useState([]);
  const handleSearch = (value) => {
    setLists(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {};
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
        borderColor: "transparent",
      }}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      dropdownStyle={{
        height: "200px",
        width: "400px",
      }}
      options={(options, lists)}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input
        size="large"
        placeholder="All Location"
        className="hover:border-transparent"
        enterButton
      />
    </AutoComplete>
  );
}
