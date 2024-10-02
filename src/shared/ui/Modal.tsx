import React, { FC, ReactNode } from 'react';
import style from './Modal.module.css';

type ModalProps = {
  visible?: boolean;
  children?: ReactNode;
};

const Modal: FC<ModalProps> = ({ visible = false, children }) => {
  return visible ? (
    <div className={style.modal_overlay}>
      <div className={style.modal_box}>
        <div className={style.close}></div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal