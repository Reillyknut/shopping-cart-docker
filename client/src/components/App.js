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
  const handleAddProduct = (product, callback) => {
    setProducts(products.concat(product))
    if (callback) {
      callback()
    }
  }

  const handleAddToCart = (object) => {
    console.log(object)
    console.log(products)

    let cartItem = cartItems.find(item => item.title === object.title)
    if (cartItem) {
      cartItem = {...object, amount: cartItem.amount + 1}
      setCartItems(cartItems.map(item => item.title === object.title ? cartItem : item ))
    } else {
      cartItem = {...object, amount: 1}
      setCartItems(cartItems.concat(cartItem))
    }

    let item = products.find(product => product.id === object.id)
    item = {...item, quantity: item.quantity - 1}
    setProducts(products.map(product => product.id === item.id ? item : product))
  }

  const handleCheckout = () => {
    setCartItems([])
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }
  
  return (
    <div id="app">
      <header>
        <Shop cartItems={cartItems} onCheckout={handleCheckout}/>
      </header>
      
      <main>
        <Products handleAddToCart={handleAddToCart} products={products} onDeleteProduct={handleDeleteProduct}/>
        <AddProduct onAddProduct={handleAddProduct} />
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


// edit product
// add new product - done
// delete product - done
// add product to cart - done
// checkout cart - done

// use APIs instead

// move some components into their own files
// rename some handlers
// prevent default on handler functions