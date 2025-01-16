import React from 'react';
import cn from 'clsx';
import style from './RootScreen.module.css';

const RootScreen: React.FC = () => {
  return (
    <>
      <p>
        Реализована система регистрации и авторизации пользователей и редактирования профиля через redux thunk и rtk
        query. Есть два (минимум) зарегистрированных ползователя.
      </p>
      <div className={cn(style.tabItem)}>
        <span>user68@example.com</span>
        <span>qqqqqqqq</span>
      </div>
      <div className={cn(style.tabItem)}>
        <span>qwerty@qwerty.com</span>
        <span>qqqqqqqq</span>
      </div>
    </>
  );
};

export default RootScreen;
