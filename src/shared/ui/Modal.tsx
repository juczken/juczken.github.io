import React from 'react';
import './Modal.css';
// import './Modal.module.css';

type ModalProps = {
  visible?: boolean;
  children?: JSX.Element;
};

export const Modal = ({ visible = false, children }: ModalProps) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-box'>
        {children}
      </div>
    </div>
  );
};