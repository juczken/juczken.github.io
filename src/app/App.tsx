import React, { useEffect, useState } from 'react';
import cn from 'clsx';
import style from './App.css';
import Layout from '../shared/ui/Layout/Layout';
import './localization';
import { Route, Routes } from 'react-router-dom';
import { WithAuthenticationState } from '../shared/hocs/withAuthenticationState';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import { LanguageProvider } from '../shared/providers/LanguageProvider/LanguageProvider';
import AuthProvider from '../shared/providers/AuthProvider/AuthProvider';
import ProductsProvider from '../shared/providers/ProductsProvider/ProductsProvider';
import CartProvider from '../shared/providers/CartProvider/CartProvider';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { getCategories } from '../features/Products/model/thunks';
import { setupAuthSync } from '../features/Auth/model/sync';
import { getTokenFromLocalStorage } from '../shared/lib/localStorage';
import { getProfile } from '../entities/User/model/thunks';
import { setAuthenticated } from '../features/Auth/model/slice';
import menuItems from './menu/menuItems';

function App() {
  // const [menuItems] = useState([
  //   ...shopMenuItems,
  //   ...profileMenuItems,
  //   ...adminMenuItems,
  //   ...authMenuItems,
  //   ...authByQueryMenuItems,
  // ]);
  const [initialized, setInitialization] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (getTokenFromLocalStorage()) {
      dispatch(getProfile());
      const token = getTokenFromLocalStorage();
      dispatch(setAuthenticated({ token }));
    }
    setupAuthSync();
    dispatch(getCategories());
    // removeTokenFromLocalStorage();
    setInitialization(true);
  }, []);

  const generateRoutes = (items: typeof menuItems) => {
    return [
      ...items.map((item) => {
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
      }),
      // <React.Fragment key={'rootScreenElement'}>
      //   <Route path={'/'} element={<RootScreen />} />
      // </React.Fragment>,
    ];
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <ProductsProvider>
            <CartProvider>
              <div className={cn(style.App)}>
                <Routes>
                  <Route path="/" element={<Layout menuItems={menuItems} />}>
                    {generateRoutes(menuItems)}
                  </Route>
                </Routes>
              </div>
            </CartProvider>
          </ProductsProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
