import React, { useState } from "react";
import { Button, Modal, Form, Input, InputNumber, DatePicker } from "antd";
import 'antd/dist/antd.css';
import Style from '../../../Header/Header.module.css'
import { useDispatch } from "react-redux";
import * as userActions from "../../../../store/user/user.action"

export const Add = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    name: "",
    family: "",
    age: 0,
    size: 0,
    birthday: 0,
    city: "",
  })

  const handleChange = (obj) => {
    setInputValue((prev) => {
      return { ...prev, ...obj }
    })
  }
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    dispatch(userActions.add(inputValue));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={Style.customButton} type="primary" htmlType="button" onClick={showModal}>اضافه کردن کاربر</Button>

      <Modal
        open={open}
        title="مشخصات خود را وارد نمایید"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            اضافه کردن کاربر
          </Button>,
          <Button key="back" onClick={handleCancel}>
            لغو
          </Button>
        ]}
      >
        <Form name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off">

          <Form.Item
            label="نام :"
            name="نام :"
            rules={[
              {
                required: true,
                message: 'نام خود را وارد نمایید!',
              },
            ]}
          >
            <Input onChange={e => handleChange({ name: e.target.value })} />
          </Form.Item>
          <Form.Item
            label="نام خانوادگی :"
            name="نام خانوادگی :"
            rules={[
              {
                required: true,
                message: 'نام خانوادگی خود را وارد نمایید!',
              },
            ]}
          >
            <Input onChange={e => handleChange({ family: e.target.value })} />
          </Form.Item>
          <Form.Item
            label="سن :"
            name="سن :"
            rules={[
              {
                required: true,
                message: 'سن خود را وارد نمایید!',
              },
            ]}>
            <InputNumber onChange={e => handleChange({ age: e })} />
          </Form.Item>
          <Form.Item
            label="قد :"
            name="قد :"
            rules={[
              {
                required: true,
                message: 'قد خود را وارد نمایید',
              },
            ]}>
            <InputNumber onChange={e => handleChange({ size: e })} />
          </Form.Item>
          <Form.Item
            label="تاریخ تولد :"
            name="تاریخ تولد :"
            rules={[
              {
                required: true,
                message: 'تاریخ تولد خود را وارد نمایید!',
              },
            ]}>
            <DatePicker onChange={(date, dateString) => handleChange({ birthday: dateString })} />
          </Form.Item>
          <Form.Item
            label="محل سکونت  :"
            name="محل سکونت :"
            rules={[
              {
                required: true,
                message: 'محل سکونت خود را وارد نمایید!',
              },
            ]}
          >
            <Input onChange={e => handleChange({ city: e.target.value })} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

