import React, { useContext } from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
// import ThemeContext from '../../contexts/ThemeContext/ThemeContext';
import { useTheme } from '../../contexts/TempContext';

const Header: React.FC = () => {
  // const {theme,toggleTheme}=useContext(ThemeContext)
  const { toggleTheme } = useTheme()
  return (
    <div className={style.header}>
      <Logo />
      <div>
        <button onClick={() => toggleTheme()}>{'Toggle'}</button>
      </div>
    </div>
  );
};

export default Header