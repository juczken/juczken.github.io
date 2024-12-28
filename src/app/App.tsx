import React from 'react';
import cn from 'clsx';
import style from './App.css';
import ThemeProvider from '../shared/providers/ThemeProvider/ThemeProvider';
import Layout from '../shared/ui/Layout/Layout';
import './localization';
import { LanguageProvider } from '../shared/providers/LanguageProvider/LanguageProvider';
import { menuItems } from 'src/shared/ui/Layout/menuItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const generateRoutes = (items: typeof menuItems) => {
    return items.map((item) => {
      if (item.dropdown) {
        return (
          <React.Fragment key={item.path + item.label}>
            <Route path={item.path} element={item.element} />
            {generateRoutes(item.dropdown)}
          </React.Fragment>
        );
      }
      return <Route key={item.path + item.label} path={item.path} element={item.element} />;
    });
  };
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <div className={cn(style.App)}>
            <Routes>
              <Route path="/" element={<Layout />}>
                {generateRoutes(menuItems)}
              </Route>
            </Routes>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
