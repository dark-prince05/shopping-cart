import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <h1 className="shop-name">
        Odin<span>Mart</span>
      </h1>
      <nav>
        <a href="#"> Home</a>
        <a href="#"> Shop</a>
        <a href="#"> Contact us</a>
        <div>
          <a href="#">
            <IoCartOutline />
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
