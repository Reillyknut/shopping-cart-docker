const cartItems = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED": {
      return action.payload.cartItems;
    }
    case "ADDED_TO_CART": {
      let cartItemToBeAdded = action.payload.item
      let cartItem = state.find(item => item._id === cartItemToBeAdded._id)
      if (cartItem) {
        return state.map(item => item._id === cartItemToBeAdded._id ? cartItemToBeAdded : item );
      } else {
        return state.concat(cartItemToBeAdded);
      }
    }
    case "CHECKED_OUT": {
      return [];
    }
    default:
      return state;
  }
};

export default cartItems;