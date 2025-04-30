import { useState } from "react";
import MainPage from "./components/MainPage.jsx";
import PageDetails from "./components/PageDetails.jsx";
import Footer from "./components/Footer.jsx";
import Shop from "./components/Shop.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log(cartItems);
  };
  return (
    <>
      <MainPage />
      <PageDetails />
      <Footer />
      <Shop addToCart={handleAddToCart} />
    </>
  );
}

export default App;
