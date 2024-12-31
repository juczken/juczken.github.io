import { createContext, useContext } from 'react';
import { CartEntry } from '../../providers/CartProvider/CartProvider';

type CartContextProps = {
  currentCart: CartEntry[];
  addToCart: (product: Product) => void;
  setQuantity: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextProps | undefined>(undefined);

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default useCart;
