import React from 'react';
import './Header.css';
// import './Header.module.css';
import { Logo } from './Logo';

export const Header: React.FC = (): React.ReactElement => {
  return (
    <div className='header'>
      <Logo />
    </div>
  );
};