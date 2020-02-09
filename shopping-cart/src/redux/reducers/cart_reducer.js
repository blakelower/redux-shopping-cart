import { ADD_TO_CART } from "../actions/cart_action";

const INITIAL_STATE = [
  {
    id: 4,
    name: "Frances Cargo Track Pants",
    description: "Great for Skating, Black, Size Medium",
    img:
      "https://cdn.brandymelvilleusa.com/media/catalog/product/cache/1/image/547x820/9df78eab33525d08d6e5fb8d27136e95/m/h/mh343b-z235s0010000_1.jpg",
    price: "$35",
    units: 2
  }
];
export default function cartReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;
      const existingProductIndex = findProductIndex(cart, product.id);
      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(cart, product)
          : [...cart, product];

          return updatedCart;
    }
  }
  return state;
}

const findProductIndex = (cart, productID) => {
  return cart.findIndex(p => p.id === productID);
};

const updateProductUnits = (cart, product) => {
  const productIndex = findProductIndex(cart, product.id);

  const updatedCart = [...cart];

  const existingProduct = updatedCart[productIndex];

  const updatedUnitProducts = {
    ...existingProduct,
    units: existingProduct.units + 
    product.units
  };

  updatedCart[productIndex] = updatedUnitProducts;

  return updatedCart;
};
