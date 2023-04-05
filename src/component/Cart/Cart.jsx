import React from 'react';
 import "./Cart.css"
const Cart = ({ cart, clearStorage }) => {
  let total = 0;
  let totalShiping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity == 0) {
      product.quantity = 1;
    }
    total += product.price * product.quantity;
    totalShiping += product.shipping;
    quantity += product.quantity;
  }
  let tax = (total * 7) / 100;
  const grandTotal = total + totalShiping + tax;

  return (
    <>
      <div className="order-list mb-5 rounded-md">
        <h1 className=" text-center text-3xl my-10">Order summary</h1>
        <p>Selected item:{quantity}</p>
        <p>Total Price:${total}</p>
        <p>Total Shipping Charge:${totalShiping}</p>
        <p>Tax:${tax}</p>
        <h1 className="text-xl mb-9">Grand Total:{grandTotal}</h1>
        <button onClick={clearStorage} className="btn w-full mb-4 mt-4">
          Clear Cart
        </button>
        <button className="btn w-full  mb-5">Review Order</button>
      </div>
    </>
  );
};

export default Cart;