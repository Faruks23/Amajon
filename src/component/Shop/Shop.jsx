import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>setProducts(data));

  }, [])
  

  return (
    <div className='Shop-container'>

      <div className="product-container">
        {
          products.map((product) =><Product key={product.id} product={product}></Product>)
       }

      </div>

      <div className="cart-container">
        order summary
      </div>
    </div>
  );
};

export default Shop;