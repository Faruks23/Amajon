import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  const [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  const [visible,setVisiblt]=useState(9);
  // console.log(cart)
  // console.log(products);
  function clearStorage() {
      setCart([]);
    localStorage.removeItem("shopping-cart");
   
    }
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const getShopingcart = getShoppingCart();
    const savedCart = [];
    // get id
    for (const id in getShopingcart) {
      
      const product = products.find((prodct) => prodct._id === id);
     
      if (product) {
        const quantty = getShopingcart[id];
        product.quantity = quantty;
        savedCart.push(product)
      }
    //  console.log(getShopingcart);
    
    }
    setCart(savedCart);
    console.log(cart);
  }, [products]);


  function handelproduct(product) {
    const newproduct = [...cart, product];
    setCart(newproduct);
    addToDb(product._id);
  }
    const handelClearCart = () => {
      setCart([]);
      deleteShoppingCart()
  };
  const handelLoudmor = () => {
    setVisiblt(products=>products+3)
  }


  return (
    <div className="Shop-container">
      <div className="product-container">
        {products.slice(0, visible).map((product) => (
          <Product
            key={product._id}
            product={product}
            handelproduct={handelproduct}
          ></Product>
        ))}

        {products.length == visible.length || (
          <button
            onClick={handelLoudmor}
            className="btn btn-danger flex mx-auto justify-center items-center text-center"
          >
            Loud More
          </button>
        )}
      </div>

      <div className="cart-container pt-11">
        <Cart cart={cart} handelClearCart={handelClearCart}>
          <Link className="flex justify-between" to={"/order"}>
            <button className="btn w-full  mb-5 mr-3">
              Order Review <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
