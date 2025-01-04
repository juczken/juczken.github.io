import React, { useState } from 'react';
import cn from 'clsx';
import style from './App.css';
import Layout from '../shared/ui/Layout/Layout';
import './localization';
import { profileMenuItems, authMenuItems, shopMenuItems, adminMenuItems } from 'src/shared/ui/Layout/menuItems';
import { Route, Routes } from 'react-router-dom';
import { WithAuthenticationState } from '../shared/hocs/withAuthenticationState';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import { LanguageProvider } from '../shared/providers/LanguageProvider/LanguageProvider';
import AuthProvider from '../shared/providers/AuthProvider/AuthProvider';
import ProductsProvider from '../shared/providers/ProductsProvider/ProductsProvider';
import CartProvider from '../shared/providers/CartProvider/CartProvider';
import { Provider } from 'react-redux';
import { store } from './store/store';

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
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
