import {
  Modal
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/Setting';

const PopupModal = ({
  title='Create',
  content
}) => {
  const { modalOpen } = useSelector(state => state.Setting);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal title={title} open={modalOpen} onCancel={handleCancel} footer={<></>}>
        {content}
      </Modal>
    </>
  );
};

export default PopupModal;