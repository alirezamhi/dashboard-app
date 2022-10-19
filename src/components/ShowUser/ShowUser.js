import { Table } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../Store/user/user.action';
import { Button } from '../Button';
function ShowUser() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users);
  const editData = useSelector((state) => state.user.editValues);
  const [editValue, setEditValue] = useState(editData);
  console.log(editValue);
  function handleChange(obj) {
    setEditValue((prev) => {
      return { ...prev, ...obj }
    })
  }
  const columns = [
    {
      title: 'عملیات',
      key: 'action',
      render: (_, record) => (
        <>
          {record.id === editData?.id ?
            <div className='btn-group'>
              <Button className='success'>لغو</Button>
              <Button className='info' onClick={() => dispatch(userActions.save(editValue))}>ذخیره</Button>
            </div>
            :
            <div className='btn-group'>
              <Button className='danger' onClick={() => dispatch(userActions.deleteUser(record.id))}>حذف</Button>
              <Button className='warning' onClick={() => dispatch(userActions.edit(usersData.find((item) => item.id === record.id)))}>ویرایش</Button>
            </div>
          }
        </>
      ),
    },
    {
      title: 'محل زندگی',
      dataIndex: 'city',
      key: 'city',
      render: (item, record) => {
        return record.id === editData?.id ? <input defaultValue={editData.city} onChange={(e) => handleChange({ city: e.target.value })} /> : item

      }
    },
    {
      title: 'تارخ تولد',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (item, record) => editData?.id === record.id ? <input defaultValue={editData.birthday} onChange={(e) => handleChange({ birthday: e.target.value })} /> : item,
    },
    {
      title: 'قد',
      dataIndex: 'size',
      key: 'size',
      render: (item, record) => editData?.id === record.id ? <input defaultValue={editData.size} onChange={(e) => handleChange({ size: e.target.value })} /> : item,
    },
    {
      title: 'سن',
      dataIndex: 'age',
      key: 'age',
      render: (item, record) => editData?.id === record.id ? <input defaultValue={editData.age} onChange={(e) => handleChange({ age: e.target.value })} /> : item,
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'family',
      key: 'family',
      render: (item, record) => editData?.id === record.id ? <input defaultValue={editData.family} onChange={(e) => handleChange({ family: e.target.value })} /> : item,
    },
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
      render: (item, record) => editData?.id === record.id ? <input defaultValue={editData.name} onChange={(e) => handleChange({ name: e.target.value })} /> : item,
    },
  ];

  return <Table columns={columns} dataSource={usersData} rowKey={(item) => item.id} />
};

export default ShowUser;