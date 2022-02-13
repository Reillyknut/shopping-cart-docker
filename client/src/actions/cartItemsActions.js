import apiClient from "../lib/ApiClient"

export const cartItemsReceived = () => {
  return (dispatch) => {
    apiClient.getCartItems((cartItems) => {
      dispatch({ type: "CART_ITEMS_RECEIVED", payload: { cartItems } })
    })
  }
};

export const itemAdded = (productId) => {
  return (dispatch) => {
    apiClient.addToCart(productId, ({ item, product }) => {
      dispatch({ type: "ADDED_TO_CART", payload: { item, product } })
    })
  }
};

export const checkedOut = () => {
  return (dispatch) => {
    apiClient.checkout(() => {
      dispatch({ type: "CHECKED_OUT" })
    })
  }
};

