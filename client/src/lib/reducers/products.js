const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    }
    case "PRODUCT_CREATED": {
      return state.concat(action.payload.newProduct);
    }
    case "ADDED_TO_CART": {
      const itemToBeReduced = action.payload.product;
      return state.map(product => product._id === itemToBeReduced._id ? {...product, quantity: product.quantity - 1} : product);
    }
    case "PRODUCT_DELETED": {
      const idToBeDeleted = action.payload.id;
      return state.filter(product => product._id !== idToBeDeleted);
    }
    case "PRODUCT_EDITED": {
      const itemsToBeUpdated = action.payload.updatedProduct;
      return state.map(product => product._id === itemsToBeUpdated._id ? itemsToBeUpdated : product);
    }
    default:
      return state;
  }
};

export default products;