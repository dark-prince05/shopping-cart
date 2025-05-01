import { IoCartOutline } from "react-icons/io5";

const Header = ({ cartItemsCount }) => {
  return (
    <header>
      <h1>
        Odin<span>Mart</span>
      </h1>
      <nav>
        <a href="#"> Home</a>
        <a href="#"> Shop</a>
        <a href="#"> Contact us</a>
        <div>
          <a href="#" className="cart-icon">
            <IoCartOutline />
            <span className="cart-count">{cartItemsCount}</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
