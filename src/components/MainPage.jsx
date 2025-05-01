import { LiaTruckMovingSolid } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";
import { LuTag } from "react-icons/lu";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main>
        <div>
          <h2>
            Hello, <span>Explorer!</span>
            <br />
            Welcome to Odin<span>Mart!</span>
          </h2>
          <p>
            We've packed our shelves with must-have styles,
            <br /> daily essentials, and a whole lot of magic. <br /> Ready to
            treat yourself? <br /> Start browsing <Link to="/shop">now!</Link>
          </p>
        </div>
      </main>
      <div className="page-details">
        <Link to="/shop">Shop Now</Link>
        <div className="cards">
          <div className="card">
            <LiaTruckMovingSolid className="icon" />
            <h3>Fast Shipping</h3>
            <p>Get your products delivered in 1-2 days</p>
          </div>
          <div className="card">
            <GoShieldCheck className="icon" />
            <h3>Secure Payment</h3>
            <p>Your payment info is protected with us</p>
          </div>
          <div className="card">
            <LuTag className="icon" />
            <h3>Best Deals</h3>
            <p>Your wallet just found its happy place!</p>
          </div>
        </div>
      </div>
      <footer id="contact-us">
        <div className="form">
          <div className="contact-us">Contact Us</div>
          <form>
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <textarea rows={4} placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Main;
