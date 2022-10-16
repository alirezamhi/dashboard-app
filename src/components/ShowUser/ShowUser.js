import {Table} from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
const columns = [
  {
    title: 'عملیات',
    key: 'action',
    render: (_, record) => (
      <div className='btn-group'>
        <button className='btn btn-danger btn-sm' >ویرایش</button>
        <button className='btn btn-warning btn-sm'>حذف</button>
      </div>
    ),
  },
  {
    title: 'محل زندگی',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'تارخ تولد',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: 'قد',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'سن',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'نام خانوادگی',
    dataIndex: 'family',
    key: 'family',
  },
  {
    title: 'نام',
    dataIndex: 'name',
    key: 'name',
  },

];
function ShowUser() {
  const usersData = useSelector((state) => state.user)
  const obj = {
    usersData,

  }
  return <Table columns={columns} dataSource={usersData} />
};
export default ShowUser;