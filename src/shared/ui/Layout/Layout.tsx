
import React, { FC, ReactNode, useContext } from 'react';
import cn from 'clsx'
import Header from '../Header/Header';
import style from './Layout.module.css'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext';

type LayoutProps = {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    // <div className={cn(theme === 'light' ? style.Light : style.Dark)}>
    <div className={cn(style.Layout)}>
      <Header />
      {children}
    </div>
  );
};

export default Layout