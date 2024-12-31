import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './shared/providers/ThemeProvider/ThemeProvider';
import { LanguageProvider } from './shared/providers/LanguageProvider/LanguageProvider';
import AuthProvider from './shared/providers/AuthProvider/AuthProvider';
import ProductsProvider from './shared/providers/ProductsProvider/ProductsProvider';
import CartProvider from './shared/providers/CartProvider/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <ProductsProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ProductsProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
