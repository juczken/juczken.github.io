import React, { useState } from 'react';
import cn from 'clsx';
import style from './App.css';
import Layout from '../shared/ui/Layout/Layout';
import './localization';
import { profileMenuItems, authMenuItems, shopMenuItems, adminMenuItems } from 'src/shared/ui/Layout/menuItems';
import { Route, Routes } from 'react-router-dom';
import { WithAuthenticationState } from '../shared/hocs/withAuthenticationState';

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
    <div className={cn(style.App)}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {generateRoutes(menuItems)}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
