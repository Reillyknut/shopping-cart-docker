import apiClient from "../lib/ApiClient"

export const productsReceived = () => {
  return (dispatch) => {
    apiClient.getProducts((products) => {
      dispatch({ type: "PRODUCTS_RECEIVED", payload: { products } })
    })
  }
};

export const productAdded = (product, callback) => {
  return (dispatch) => {
    apiClient.addProduct(product, (newProduct) => {
      dispatch({ type: "PRODUCT_CREATED", payload: { newProduct } })
      if (callback) {callback()}
    })
  }
};

export const addedToCart = (product) => {
  return (dispatch) => {
    apiClient.addToCart(product, (addedProduct) => {
      dispatch({ type: "ADDED_TO_CART", payload: { product }})
    })
  }
};

export const productDeleted = (id) => {
  return (dispatch) => {
    apiClient.deleteProduct(id, () => {
      dispatch({ type: "PRODUCT_DELETED", payload: { id }})
    })
  }
};

export const productEdited = (id, editedProduct, callback) => {
  return (dispatch) => {
    apiClient.editProduct(id, editedProduct, (updatedProduct) => {
      dispatch({ type: "PRODUCT_EDITED", payload: { updatedProduct }})
      if (callback) {callback()}
    })
  }
};
