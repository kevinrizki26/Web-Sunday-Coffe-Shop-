import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const toNumberPrice = (price) => {
  const value = Number(String(price).replace(/[^0-9]/g, ""));
  return Number.isNaN(value) ? 0 : value * 1000;
};

export default function MainLayout() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseCartItem = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseCartItem = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeCartItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const cartSubtotal = useMemo(
    () => cartItems.reduce((total, item) => total + toNumberPrice(item.price) * item.quantity, 0),
    [cartItems]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        cartCount={cartCount}
        cartItems={cartItems}
        cartSubtotal={cartSubtotal}
        onIncreaseItem={increaseCartItem}
        onDecreaseItem={decreaseCartItem}
        onRemoveItem={removeCartItem}
        onClearCart={clearCart}
      />

      <main className="flex-1">
        <Outlet context={{ addToCart, cartItems, cartCount, cartSubtotal, clearCart }} />
      </main>

      <Footer />
    </div>
  );
}
