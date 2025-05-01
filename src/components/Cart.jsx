import { useState, useEffect, useRef } from "react";
import { MdStarOutline, MdStarRate } from "react-icons/md";

const Cart = ({ cartItems, setCartItems }) => {
  const [totalAmt, setTotalAmt] = useState(0);
  const dialogRef = useRef(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, product) => sum + product.price * product.count,
      0,
    );
    setTotalAmt(total.toFixed(2));
  }, [cartItems]);

  const removeItem = (prodId) => {
    const dummy = [...cartItems];
    const newCart = dummy.filter((product) => product.id !== prodId);
    setCartItems(newCart);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const starCountGen = (ratings) => {
    let res = [];
    let rate = Math.floor(ratings);

    for (let i = 1; i <= 5; i++) {
      if (i <= rate) res.push(<MdStarRate color="orange" key={i} />);
      else res.push(<MdStarOutline color="orange" key={i} />);
    }
    return res;
  };
  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <h1>is Empty</h1>
          <p className="add-product-text">
            Add some products to your cart before checkout.
          </p>
          <button className="continue-shopping">Continue Shopping</button>
        </div>
      ) : (
        cartItems.map((product) => {
          return (
            <div className="cart-items" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="cart-item-details">
                <p className="cart-item-category">
                  {product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)}
                </p>
                <p className="cart-item-title">{product.title}</p>
                <p className="cart-item-ratings">
                  {starCountGen(product.rating.rate)} ({product.rating.count})
                </p>
                <p className="cart-item-price">
                  {product.price.toString().includes(".")
                    ? `$${product.price}`
                    : `$${product.price}.00`}
                </p>
                <p className="cart-item-quantity">Quantity: {product.count}</p>
                <button
                  className="cart-item-remove-btn"
                  onClick={() => removeItem(product.id)}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })
      )}
      {cartItems.length > 0 && (
        <>
          <div className="total-amt">Total Price: ${totalAmt}</div>
          <div className="shop-btns">
            <button className="continue-shopping">Continue Shopping</button>
            <button
              className="checkout"
              onClick={() => {
                openDialog();
                emptyCart();
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
      <dialog ref={dialogRef}>
        <h2>Thank you for purchasing</h2>
        <button className="continue-shopping" onClick={closeDialog}>
          Continue Shopping{" "}
        </button>
      </dialog>
    </div>
  );
};

export default Cart;
