import React, { FC, ReactNode, useState } from 'react';
import style from './Modal.module.css';

type ModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children?: ReactNode;
};

const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {

  return visible ? (
    <div className={style.modal_overlay}>
      <div className={style.modal_box}>
        <div className={style.close} onClick={() => setVisible(false)}></div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal