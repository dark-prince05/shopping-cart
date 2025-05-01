import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = ({ cartItemsCount }) => {
  return (
    <header>
      <h1>
        Odin<span>Mart</span>
      </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <span className="cart-icon">
            Cart
            <IoCartOutline className="cart-symbol" />
            <span className="cart-count">{cartItemsCount}</span>
          </span>
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
