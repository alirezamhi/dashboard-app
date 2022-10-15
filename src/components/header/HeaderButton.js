import React, { useState } from "react";
import { Button, Modal } from "antd";
import 'antd/dist/antd.css';
import { ModalForm } from "../ModalForm";

const HeaderButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" htmlType="button" onClick={showModal}>اضافه کردن کاربر</Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ModalForm />
      </Modal>
    </div>
  );
};

export default HeaderButton;
