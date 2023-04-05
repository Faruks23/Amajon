import React from 'react';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Reviewitem = ({ product, handelremoveCart }) => {
  // console.log(product);
  const { name, img, price, shipping, quantity,id } = product;
  return (
    <div className="review-item w-[571px] border rounded-lg p-4 mb-6 shadow-lg flex justify-between  items-center gap-2">
      <div className="flex gap-8">
        <img className="w-[91px] h-[91px]" src={img} alt="" />
        <div className="review leading-7  font-semibold ">
          <h1 className="text-xl">{name}</h1>
          <p>
            Price: <span>$</span> {price}
          </p>
          <p>Order Quantity:{quantity}</p>
          <p>
            Shipping Charge:{shipping} <span>$</span>
          </p>
        </div>
      </div>
      <div className="w-[60px] h-[60px] bg-red-200 rounded-full flex justify-center items-center">
        <button onClick={() => handelremoveCart(id)}>
          <FontAwesomeIcon
            className=" w-[30px] h-[30px]  text-red-600"
            icon={faTrashAlt}
          />
        </button>
      </div>
    </div>
  );
};

export default Reviewitem;