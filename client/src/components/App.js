import React, { useState, useEffect } from "react";
import axios from 'axios'
import Shop from './Shop'
import Products from './Products'
import AddProduct from './AddProduct'
import data from '../lib/data'

const App = () => {
  const [ products, setProducts ] = useState([])
  const [ cartItems, setCartItems ] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await axios.get('/')
  //     const data = response.data
  //     setProducts(data)
  //   }
  //   getProducts()
  // }, [])

  // const handleEdit = () => {}
  const handleAddProduct = () => {
    
  }

  const handleAddToCart = (object) => {
    console.log(object)

    cartItems.forEach(item => {
      if (cartItems.includes(item)) {
        item.quantity += 1
      }
    })
    setCartItems(cartItems.concat(object))
  }
  
  return (
    <div id="app">
      <header>
        <Shop cartItems={cartItems}/>
      </header>
      
      <main>
        <Products handleAddToCart={handleAddToCart} products={products}/>
        <AddProduct handleAdd={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;

// Shop
  // Cart
// Products
  // ProductItem
// Add Product