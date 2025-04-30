import Header from "./Header.jsx";
import { useState, useEffect } from "react";
import { MdStarOutline, MdStarRate } from "react-icons/md";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filterProducts = (type) => {
    if (type === "all") return products;
    else return products.filter((product) => product.category === type);
  };

  const findProducts = (key) => {
    if (key.trim() === "") {
      return [];
    }
    let res = category.filter((product) =>
      product.title.toLowerCase().includes(key.trim()),
    );
    console.log(searchedProduct);
    return res.length === 0 ? ["none"] : res;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const productList = await response.json();
        setLoading(false);
        setProducts(productList);
        setcategory(productList);
        console.log(productList);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

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
    <>
      <div className="shop">
        <h1 className="shop-top-text">Our Collections </h1>
        <p className="shop-info">
          Browse our collection of high-quality items. <br /> Use the filters to
          find exactly what you're looking for.
        </p>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(e) => {
              setSearchedProduct(findProducts(e.target.value));
            }}
          />
          <select
            onChange={(e) => {
              setcategory(filterProducts(e.target.value));
            }}
          >
            <option value="all">All Catogories</option>
            <option value="men's clothing">Men's Clothings</option>
            <option value="women's clothing">Women's Clothings</option>
            <option value="jewelery">Jeweleries</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="products">
          {searchedProduct[0] === "none" ? (
            <div className="product-not-match">
              No products match your criteria.
            </div>
          ) : (
            (searchedProduct.length > 0 ? searchedProduct : category).map(
              (product) => {
                return (
                  <div className="product" key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <div className="product-details">
                      <p className="product-category">
                        {product.category.charAt(0).toUpperCase() +
                          product.category.slice(1)}
                      </p>
                      <p className="product-title">
                        {product.title} <span>dummy</span>{" "}
                        {/* dummy span is for pricing alignment*/}
                      </p>
                      <p className="product-ratings">
                        {starCountGen(product.rating.rate)} (
                        {product.rating.count})
                      </p>
                      <p className="product-price">
                        {product.price.toString().includes(".")
                          ? `$${product.price}`
                          : `$${product.price}.00`}
                      </p>
                      <div className="product-count">
                        <button>-</button>
                        <input type="tel" />
                        <button>+</button>
                      </div>
                      <button className="cart-btn">Add To Cart</button>
                    </div>
                  </div>
                );
              },
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
