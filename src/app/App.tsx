import React, { useState } from 'react';
import cn from 'clsx';
import style from './App.css';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import Layout from '../shared/ui/Layout/Layout';
import './localization';
import { LanguageProvider } from '../shared/providers/LanguageProvider/LanguageProvider';
import { profileMenuItems, authMenuItems, shopMenuItems, adminMenuItems } from 'src/shared/ui/Layout/menuItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsProvider from '../shared/providers/ProductsProvider/ProductsProvider';
import AuthProvider from '../shared/providers/AuthProvider/AuthProvider';
import { WithAuthenticationState } from '../shared/hocs/withAuthenticationState';
import CartProvider from '../shared/providers/CartProvider/CartProvider';

function App() {
  const [menuItems] = useState([...shopMenuItems, ...profileMenuItems, ...adminMenuItems, ...authMenuItems]);

  const generateRoutes = (items: typeof menuItems) => {
    return items.map((item) => {
      if (item.dropdown) {
        return (
          <React.Fragment key={item.path + item.label}>
            <Route
              path={item.path}
              element={
                <WithAuthenticationState
                  authenticationState={item.authenticationState}
                  routes={{ root: '/', signIn: '/auth/SignIn' }}
                >
                  {item.element}
                </WithAuthenticationState>
              }
            />
            {generateRoutes(item.dropdown)}
          </React.Fragment>
        );
      }
      return (
        <React.Fragment key={item.path + item.label}>
          <Route
            path={item.path}
            element={
              <WithAuthenticationState
                authenticationState={item.authenticationState}
                routes={{ root: '/', signIn: '/auth/SignIn' }}
              >
                {item.element}
              </WithAuthenticationState>
            }
          />
        </React.Fragment>
      );
    });
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <ProductsProvider>
              <CartProvider>
                <div className={cn(style.App)}>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      {generateRoutes(menuItems)}
                    </Route>
                  </Routes>
                </div>
              </CartProvider>
            </ProductsProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
