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
    <div >
      <Space direction="vertical">
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </Space>
    </div>
  );
};

export default HeaderSearch;
