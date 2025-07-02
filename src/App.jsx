import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { useState } from "react";
import NotFound from "./Pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, action) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Don't show Navbar on NotFound route
  const hideNavbar =
    location.pathname === "/404" ||
    location.pathname === "*" ||
    location.pathname === "/notfound";

  return (
    <>
      {!hideNavbar && <Navbar cartCount={cart.length} />}
      <Routes>
        <Route
          path="/"
          element={<Products cart={cart} handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
