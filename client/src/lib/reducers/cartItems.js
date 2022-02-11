const cartItems = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED": {
      // payload: {cartItems: data}
      return action.payload.cartItems;
    }
    case "ITEM_ADDED": {
      let cartItemToBeAdded = action.payload.newCartItem
      let cartItem = state.find(item => item.productId === cartItemToBeAdded.productId)
      if (cartItem) {
        return state.map(item => item.productId === cartItemToBeAdded.productId ? cartItemToBeAdded: item );
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