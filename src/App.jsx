import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import PageDetails from "./components/PageDetails.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <PageDetails />
      <Footer />
    </>
  );
}

export default App;
