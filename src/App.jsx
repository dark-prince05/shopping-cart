import { useState, createContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export const ShopContext = createContext({
  handleAddToCart: () => {},
  cartItems: [],
  setCartItems: [],
});

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const ind = prev.findIndex((prod) => prod.id === product.id);

      if (ind >= 0) {
        const dummy = [...prev];
        const updatedProduct = { ...dummy[ind] };
        updatedProduct.count += product.count;
        dummy[ind] = updatedProduct;
        return dummy;
      } else {
        return [...prev, product];
      }
    });
  };
  return (
    <ShopContext.Provider value={{ handleAddToCart, cartItems, setCartItems }}>
      <Header cartItemsCount={cartItems.length} />
      <Outlet />
      <Footer />
    </ShopContext.Provider>
  );
}

export default App;
