import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Reviewitem from '../Review/Reviewitem';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
const Orders = () => {
  const [product, savedCart] = useLoaderData();
  const [cart, seetCart] = useState(savedCart);
  const handelremoveCart = (id) => {
    const RemoveProduct = cart.filter(pd => pd._id !== id)
    seetCart(RemoveProduct)
    removeFromDb(id);
  }
  const handelClearCart = () => {
    seetCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="Shop-container">
      <div className="review-container my-[50px] mx-auto">
        {cart.map((products) => (
          <Reviewitem key={products._id}
            product={products}
            handelremoveCart={handelremoveCart}
          ></Reviewitem>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} handelClearCart={handelClearCart}>
          <Link to={"/checkout"}>
            {" "}
            <button className="btn w-full  mb-5">
              Check Out <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;