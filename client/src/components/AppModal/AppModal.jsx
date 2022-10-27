import {
  Modal
} from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AppModal = ({
  content,
  width=800
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(content?.open);
  }, [content]);

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal 
      className={content?.status} 
      title={content?.title} 
      open={open} 
      onCancel={handleCancel} 
      width={width}
      footer={<></>}>
        {content?.content}
      </Modal>
    </>
  );
};

export default AppModal;