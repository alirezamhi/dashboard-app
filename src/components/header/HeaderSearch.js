import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

const HeaderSearch = () => {
  return (
    <div className="input-group w-25">
      <button className="btn btn-primary" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
      <input className="form-control text-end" placeholder="جستجو کاربران" />
    </div>
  );
};

export default HeaderSearch;
