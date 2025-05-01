import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { MdStarOutline, MdStarRate } from "react-icons/md";
import { RiLoader3Fill } from "react-icons/ri";

const Shop = () => {
  const { handleAddToCart } = useOutletContext(); //used to retrieve the functionality from the parent during routing

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [productCount, setProductCount] = useState(
    Array.from({ length: 21 }, (_, ind) => 1),
  );

  const resetCount = (prodId) => {
    let dummy = [...productCount];
    dummy[prodId] = 1;
    setProductCount(dummy);
  };

  const handleCountChange = (e, prodId) => {
    let dummy = [...productCount];
    if (e.target.value > 1000) {
      dummy[prodId] = 999;
    } else if (e.target.value === "") {
      dummy[prodId] = 0;
    } else {
      dummy[prodId] = parseInt(e.target.value);
    }
    setProductCount(dummy);
  };

  const increaseCount = (prodId) => {
    let dummy = [...productCount];
    if (dummy[prodId] > 998) {
      return;
    }
    dummy[prodId]++;
    setProductCount(dummy);
  };

  const decreaseCount = (prodId) => {
    let dummy = [...productCount];
    if (dummy[prodId] < 1) {
      return;
    }
    dummy[prodId]--;
    setProductCount(dummy);
  };

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
      } catch (err) {
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
          {loading && (
            <div className="loading">
              <RiLoader3Fill className="loading-icon" />
              Loading....
            </div>
          )}
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
                        {product.title} <span>dummmmmy </span>
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
                        <button onClick={() => decreaseCount(product.id)}>
                          -
                        </button>
                        <input
                          type="tel"
                          onChange={(e) => handleCountChange(e, product.id)}
                          value={productCount[product.id]}
                        />
                        <button onClick={() => increaseCount(product.id)}>
                          +
                        </button>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={(e) => {
                          if (productCount[product.id] > 0)
                            handleAddToCart({
                              ...product,
                              count: productCount[product.id],
                            });

                          resetCount(product.id);
                        }}
                      >
                        Add To Cart
                      </button>
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
