import React from 'react';
import style from './Modal.module.css';
// import './Modal.module.css';

type ModalProps = {
  visible?: boolean;
  children?: JSX.Element;
};

export const Modal = ({ visible = false, children }: ModalProps) => {
  return (
    <div className={style.modal_overlay}>
      <div className={style.modal_box}>
      <div className={style.close} ></div>
      {children}
      </div>
    </div>
  );
};