import { Space, Table, Tag } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

// const userValues = useSelector((state) => state.user)
// console.log(userValues);

const columns = [
  {
    title: 'نام',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'نام خانوادگی',
    dataIndex: 'family',
    key: 'family',
  },
  {
    title: 'سن',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'قد',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'تارخ تولد',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: 'محل زندگی',
    dataIndex: 'city',
    key: 'city',
  },

];
function ShowUser() {
  const usersData = useSelector((state) => state.user);
  return <Table columns={columns} dataSource={usersData} />
};
export default ShowUser;