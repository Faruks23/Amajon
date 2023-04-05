import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Review/Reviewitem';
import { removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
  const [product, savedCart] = useLoaderData();
  const [cart, seetCart] = useState(savedCart);
  const handelremoveCart = (id) => {
    const RemoveProduct = cart.filter(pd => pd.id !== id)
    seetCart(RemoveProduct)
    removeFromDb(id);
  }

  return (
    <div className="Shop-container">
      <div className="review-container my-[50px] mx-auto">
        {cart.map((products) => (
          <Reviewitem
            product={products}
            handelremoveCart={handelremoveCart}
          ></Reviewitem>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;