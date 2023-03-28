import React from 'react';
 import "./Cart.css"
const Cart = ({ cart }) => {
    
  console.log(cart);
  let total = 0;
  let totalShiping = 0;
  for (const product of cart) {
    total += product.price;
    totalShiping+=product.shipping;
  }
  let tax = (total*7)/100;
  const grandTotal=total+totalShiping + tax;

  return (
    <>
      <div className="order-list">
        <h1 className=" text-center text-3xl my-10">Order summary</h1>
        <p>Selected item:{cart.length}</p>
        <p>Total Price:${total}</p>
        <p>Total Shipping Charge:${totalShiping}</p>
        <p>Tax:${tax}</p>
        <h1 className="text-xl">Grand Total:{grandTotal}</h1>
      </div>
    </>
  );
};

export default Cart;