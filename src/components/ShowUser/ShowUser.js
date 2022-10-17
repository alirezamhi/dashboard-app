import {Table} from 'antd';
import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { deleteUser } from '../../Store/user/user.action';
const dispatch = useDispatch()
const columns = [
  {
    title: 'عملیات',
    key: 'action',
    render: (_, record) => (
      <div className='btn-group'>
        <button className='btn btn-danger btn-sm' onChange={()=>dispatch(deleteUser())}>ویرایش</button>
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
  const dispatch = useDispatch()
  return <Table columns={columns} dataSource={usersData} />
};
export default ShowUser;