import React from 'react';
import cn from 'clsx';
import style from './RootScreen.module.css';

const RootScreen: React.FC = () => {
  return (
    <>
      <p>
        Сейчас в виртуальной базе два пользователя. При авторизации под ними происходит синхронизация на разных
        вкладках. При регистрации нового пользователя, он будет доступен только на его вкладке.
      </p>
      <div className={cn(style.tabItem)}>
        <span>user1@example.com</span>
        <span>password1</span>
      </div>
      <div className={cn(style.tabItem)}>
        <span>user2@example.com</span>
        <span>password2</span>
      </div>
    </>
  );
};

export default RootScreen;
