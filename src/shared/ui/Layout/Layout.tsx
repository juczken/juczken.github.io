import React, { FC } from 'react';
import cn from 'clsx';
import Header from '../Header/Header';
import style from './Layout.module.css';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Outlet } from 'react-router-dom';
import menuItems from './menuItems';
import NavigationBar from '../NavigationBar/NavigationBar';

const Layout: FC = () => {
  return (
    <div className={cn(style.Layout)}>
      <Header>
        <div className={style.item}>
          <Logo />
        </div>
        <div className={style.item}>
          <NavigationBar menuItems={menuItems} />
        </div>
        <div className={style.right_wrapper}>
          <div className={style.item}>
            <ThemeSwitcher />
          </div>
          <div className={style.item}>
            <LanguageSwitcher />
          </div>
        </div>
      </Header>
      <Outlet />
    </div>
  );
};

// const Layout: FC = () => {
//   return (
//     <div className={cn(style.Layout)}>
//       <Header>
//         <div className={style.item}>
//           <Logo />
//         </div>
//         <div>
//           <NavigationBar menuItems={menuItems} />
//         </div>
//         <div className={style.right_wrapper}>
//           <div className={style.item}>
//             <ThemeSwitcher />
//           </div>
//           <div className={style.item}>
//             <LanguageSwitcher />
//           </div>
//         </div>
//       </Header>
//       <Outlet />
//     </div>
//   );
// };
export default Layout;
