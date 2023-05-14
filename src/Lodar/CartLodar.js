import { getShoppingCart } from "../../utilities/fakedb";

const cartLoders = async () => {
  const lodadedProducts = await fetch("http://localhost:5000/products");
  const products = await lodadedProducts.json();
  console.log(products);

  const stordCarts = getShoppingCart();
  console.log(stordCarts);

  const savedCart = [];

  for ( const id in stordCarts) { 
    const addedProduct=products.find(pd =>pd._id==id);
    if (addedProduct) {
      const quantity = stordCarts[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
     }
  }
  return [products, savedCart];
}

export default cartLoders;