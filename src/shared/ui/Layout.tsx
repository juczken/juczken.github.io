
import React from 'react';
// import './Layout.css'
import { Header } from './Header';
import { Modal } from './Modal';
import { Test } from './Test';
// import { ButtonIntoCart } from '../Buttons/ButtonIntoCart';
// import { SimpleButton } from '../Buttons/SimpleButton';
// import { ItemCard, ItemCardFull, ItemCardInCart } from '../ItemCard';

export const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <Header />
      {/* <ItemCard /> */}
      <Modal />
      {/* <ButtonIntoCart count={2} /> */}
      {/* <ButtonIntoCart count={0} /> */}
      {/* <SimpleButton /> */}
      {/* <ItemCardFull /> */}
      {/* <ItemCardInCart /> */}
      {/* <Test /> */}
    </div>
  );
};