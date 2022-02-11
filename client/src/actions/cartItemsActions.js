import apiClient from "../lib/ApiClient"

export const cartItemsReceived = () => {
  return (dispatch) => {
    apiClient.getCartItems((cartItems) => {
      dispatch({ type: "CART_ITEMS_RECEIVED", payload: { cartItems } })
    })
  }
};

export const itemAdded = (item) => {
  return (dispatch) => {
    apiClient.addToCart(item, (itemToBeAdded) => {
      const newCartItem = itemToBeAdded.item
      dispatch({ type: "ITEM_ADDED", payload: { newCartItem } })
    })
    // apiClient.getProducts((products) => {
    //   dispatch({ type: "PRODUCTS_RECEIVED", payload: { products } })
    // })
  }
};

export const checkedOut = () => {
  return (dispatch) => {
    apiClient.checkout(() => {
      dispatch({ type: "CHECKED_OUT" })
    })
  }
};

