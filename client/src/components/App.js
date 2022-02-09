import React, { useState, useEffect } from "react";
import axios from 'axios'

import Shop from './Shop'
import Products from './Products'
import AddProduct from './AddProduct'

const App = () => {
  const [ products, setProducts ] = useState([])
  const [ cartItems, setCartItems ] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }
    getProducts()
  }, [])

  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get('/api/cart')
      setCartItems(response.data)
    }
    getCartItems()
  }, [])

  const handleEditProduct = async (id, product, callback) => {
    const response = await axios.put(`/api/products/${id}`, product)

    if (response.status === 200) {
      setProducts(products.map(item => item._id === id ? response.data : item))
    }

    if (callback) { callback() }
  }

  const handleAddProduct = async (product, callback) => {
    const response = await axios.post('/api/products', product)

    if (response.status === 200) {
      setProducts([...products, response.data])
    }
    
    if (callback) { callback() }
  }

  const handleAddToCart = async (object) => {
    const response = await axios.post('/api/add-to-cart', object)

    if (response.status === 200) {
      let cartItem = cartItems.find(item => item._id === response.data.item._id)
      if (cartItem) {
        cartItem = {...object, quantity: cartItem.quantity + 1}
        setCartItems(cartItems.map(item => {
          console.log(item, cartItem)
          return item._id === response.data.item._id ? response.data.item : item 
        }))
      } else {
        cartItem = {...object, quantity: 1}
        setCartItems(cartItems.concat(cartItem))
      }

      let item = products.find(product => product._id === object.productId)
      item = {...item, quantity: item.quantity - 1}
      setProducts(products.map(product => product._id === item._id ? item : product))
      // debugger;
    }
  }

  const handleCheckout = async () => {
    const response = await axios.post('/api/checkout')

    if (response.status === 200) {
      setCartItems([])
    }
  }

  const handleDeleteProduct = async (id) => {
    const response = await axios.delete(`/api/products/${id}`)

    if (response.status === 200) {
      setProducts(products.filter(product => product._id !== id))
    }
  }
  
  return (
    <div id="app">
      <header>
        <Shop cartItems={cartItems} onCheckout={handleCheckout}/>
      </header>
      
      <main>
        <Products
          onAddToCart={handleAddToCart}
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
        <AddProduct onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;


// add get & post /api/cart and post /api/cart/checkout

// move some components into their own files
// rename some handlers
// prevent default on handler functions
// extract api calls to services folder?

// Add/edit/cart tests