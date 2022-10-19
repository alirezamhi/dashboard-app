import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import Fuse from 'fuse.js';
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../Store/user/user.action";
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const HeaderSearch = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [searchValue, setSearchValue] = useState("");

  const options = {
    keys: [
      'name'
    ], isCaseSensitive: false, includeMatches: true
  }
  const fuse = new Fuse(users, options);

  function handleSearch() {
    const searchResult = fuse.search(searchValue).map((node) => node.item);
    dispatch(userActions.search(searchResult));
  }
  return (
    <div className="input-group w-25">
      <button className="btn btn-primary" type="button" id="button-addon1" onClick={handleSearch}><i className="bi bi-search"></i></button>
      <input className="form-control text-end" placeholder="جستجو کاربران" onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
};

export default HeaderSearch;
