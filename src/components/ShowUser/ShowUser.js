import { Table } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../Store/user/user.action';
function ShowUser() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const editData = useSelector((state) => state.user.editValues);
  console.log(editData);

  const columns = [
    {
      title: 'عملیات',
      key: 'action',
      render: (_, record) => (
        <div className='btn-group'>
          <button className='btn btn-danger btn-sm' onClick={() => dispatch(userActions.edit(usersData.find((item) => item.id === record.id)))}>ویرایش</button>
          <button className='btn btn-warning btn-sm' onClick={() => dispatch(userActions.deleteUser(record.id))}>حذف</button>
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
      render: (item) => editData === item ? <input /> : item,
    },

  ];

  return <Table columns={columns} dataSource={usersData} rowKey={(item) => item.id} />
};

export default ShowUser;