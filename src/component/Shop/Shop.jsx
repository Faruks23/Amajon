import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  // console.log(cart)
  // console.log(products);
  function clearStorage() {
      setCart([]);
    localStorage.removeItem("shopping-cart");
   
    }
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const getShopingcart = getShoppingCart();
    const savedCart = [];
    // get id
    for (const id in getShopingcart) {
      
      const product = products.find((prodct) => prodct.id === id);
     
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
    addToDb(product.id);
  }

  return (
    <div className="Shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelproduct={handelproduct}
          ></Product>
        ))}
      </div>

      <div className="cart-container pt-11">
        <Cart cart={cart} clearStorage={clearStorage}></Cart>
      </div>
    </div>
  );
};

export default Shop;
