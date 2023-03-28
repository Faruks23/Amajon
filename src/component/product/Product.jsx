import React from "react";
import "./Product.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  // console.log(props.product);
  const imgUrl = img ? img : generateAvatar();
  const handelAddtoCart = props.handelproduct;

  return (
    <div className="product">
      <div className="card w-96 bg-base-100 shadow-xl border">
        <figure>
          <img className="w-full" src={imgUrl} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3 className="text-lg mb-11">Price:${price}</h3>
          <p>Manufacturer :{seller}</p>
          <p>Rating:{ratings}</p>
        </div>
        <div className="card-actions justify-center w-full ">
          <button
            onClick={() => handelAddtoCart(props.product)}
            className="btn w-full button-chang"
          >
            Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
