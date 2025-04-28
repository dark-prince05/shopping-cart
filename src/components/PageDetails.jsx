import { LiaTruckMovingSolid } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";
import { LuTag } from "react-icons/lu";
const PageDetails = () => {
  return (
    <div className="page-details">
      <a href="#">Shop Now</a>
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
  );
};

export default PageDetails;
