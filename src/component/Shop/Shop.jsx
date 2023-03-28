import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart)
  // console.log(products);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>setProducts(data));

  }, [])
  
    function handelproduct(product) {
      const newproduct = [...cart, product];
      setCart(newproduct);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;