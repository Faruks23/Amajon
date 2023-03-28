import React from 'react';
 import './Product.css'
const Product = (props) => {
  const { img,name,price} = props.product;
   console.log(props.product);
  return (
    <div>
      <h1>Single product here</h1>
    </div>
  );
};

export default Product;