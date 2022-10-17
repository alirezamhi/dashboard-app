import {Table} from 'antd';
import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { deleteUser ,  edit} from '../../Store/user/user.action';
function ShowUser() {
  const dispatch = useDispatch()
const columns = [
  {
    title: 'عملیات',
    key: 'action',
    render: (_, record) => (
      <div className='btn-group'>
        <button className='btn btn-danger btn-sm' >ویرایش</button>
        <button className='btn btn-warning btn-sm' onClick={()=>dispatch(deleteUser(record.id))}>حذف</button>
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
  const usersData = useSelector((state) => state.user.users);
  console.log(usersData);
  return <Table columns={columns} dataSource={usersData} />
};
export default ShowUser;