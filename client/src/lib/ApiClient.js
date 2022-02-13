import axios from "axios";

const apiClient = {
  getProducts: (callback) => {
    return axios
      .get('api/products')
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err))
  },
  getCartItems: (callback) => {
    return axios
      .get('api/cart')
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err))
  },
  editProduct: (id, product, callback) => {
    return axios
      .put(`api/products/${id}`, product)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err))
  },
  addProduct: (product, callback) => {
    return axios
      .post('api/products', product)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err))
  },
  addToCart: (productId, callback) => {
    return axios
      .post('api/add-to-cart', { productId })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err))
  },
  checkout: (callback) => {
    return axios
      .post('api/checkout')
      .then(callback)
      .catch((err) => console.log(err))
  },
  deleteProduct: (id, callback) => {
    return axios
      .delete(`api/products/${id}`)
      .then(callback)
      .catch((err) => console.log(err))
  },
}

export default apiClient;