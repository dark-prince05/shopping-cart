import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

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
    <>
      <Header cartItemsCount={cartItems.length} />
      <Outlet context={{ handleAddToCart, cartItems, setCartItems }} />
      <Footer />
    </>
  );
}

export default App;
