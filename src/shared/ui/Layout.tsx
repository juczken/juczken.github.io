
import React from 'react';
import { Header } from './Header';
import { Modal } from './Modal';
import { ProductItem } from 'src/entities/Product/ui/ProductItem/ProductItem';
import { Test } from './Test';

export const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <Header />
      <ProductItem name='Fine product' photo="src/shared/ui/images/products/down1.png" price={100.15} desc='ооооо оооооо оооооо оооооо оооооо ооооо оооо ооооооооооооооооооо ооооооооооооооооооо ооооооооооооооооо оо ччччччччччччччччч чччччччччччччччччч ччччччччччччччччч чччччччччччччччч чччччччччччччччч еееееееееееееееее ееееееееееееееееее еееееееееееееее ееееееееееееееее еееееееееее ннннннннннннн ннннннннннннннннн ннннннннннннннннн ннннннннннннн ннннннн ььььььььььььь ьььььььььььььььььььь ьььььььььььььььььььь ььььььььььььььььььь длинный текст' />
      <div style={{width:150}}>
      <ProductItem name='Fine product' photo="src/shared/ui/images/products/down1.png" price={100.15} desc='ооооо оооооо оооооо оооооо оооооо ооооо оооо ооооооооооооооооооо ооооооооооооооооооо ооооооооооооооооо оо ччччччччччччччччч чччччччччччччччччч ччччччччччччччччч чччччччччччччччч чччччччччччччччч еееееееееееееееее ееееееееееееееееее еееееееееееееее ееееееееееееееее еееееееееее ннннннннннннн ннннннннннннннннн ннннннннннннннннн ннннннннннннн ннннннн ььььььььььььь ьььььььььььььььььььь ьььььььььььььььььььь ььььььььььььььььььь длинный текст' />
      </div>
      {/* <img src="src/shared/ui/images/products/down1.png"/>
      <img src={require("src/shared/ui/images/products/down1.png")}/> */}
      {/* <ItemCard /> */}
      {/* <Modal children={<Test/>}/> */}
      {/* <ButtonIntoCart count={2} /> */}
      {/* <ButtonIntoCart count={0} /> */}
      {/* <SimpleButton /> */}
      {/* <ItemCardFull /> */}
      {/* <ItemCardInCart /> */}
      {/* <Test /> */}
    </div>
  );
};