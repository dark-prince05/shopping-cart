import { useState } from "react";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import PageDetails from "./components/PageDetails.jsx";
import Footer from "./components/Footer.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";

function App({}) {
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
      <MainPage />
      <PageDetails />
      <Footer />
      <Shop addToCart={handleAddToCart} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;
