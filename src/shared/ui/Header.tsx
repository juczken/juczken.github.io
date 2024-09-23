import React from 'react';
import style from './Header.module.css';
// import './Header.module.css';
import { Logo } from './Logo';

export const Header: React.FC = (): React.ReactElement => {
  return (
    <div className={style.header}>
      <Logo />
    </div>
  );
};