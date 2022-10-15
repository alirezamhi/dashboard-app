import { Space, Table, Tag } from 'antd';
import {Information} from "../information/Information"
import React from 'react';
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
const data = [
...Information
];
const ShowUser = () => <Table columns={columns} dataSource={data} />;
export default ShowUser;