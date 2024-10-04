
import React, { FC, ReactNode } from 'react';
import Header from './Header';

type LayoutProps={
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className='layout'>
      <Header />
      {children}
    </div>
  );
};

export default Layout