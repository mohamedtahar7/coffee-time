"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useMemo,
} from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  desc: string;
  amount: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  desc: string;
}

interface CartContextType {
  cart: CartItem[];
  itemAmount: number;
  total: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("coffeetime_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error("Failed to parse cart data", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("coffeetime_cart", JSON.stringify(cart));
  }, [cart]);

  const { total, itemAmount } = useMemo(() => {
    return cart.reduce(
      (acc, item) => ({
        total: acc.total + item.amount * item.price,
        itemAmount: acc.itemAmount + item.amount,
      }),
      { total: 0, itemAmount: 0 },
    );
  }, [cart]);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item,
        ),
      );
    } else {
      const newItem: CartItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
    // THE CULPRIT: I removed setIsOpen(true) from here.
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear your bag?")) {
      setCart([]);
    }
  };

  const increaseAmount = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item,
      ),
    );
  };

  const decreaseAmount = (id: number) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    if (item.amount > 1) {
      setCart(
        cart.map((i) => (i.id === id ? { ...i, amount: item.amount - 1 } : i)),
      );
    } else {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
