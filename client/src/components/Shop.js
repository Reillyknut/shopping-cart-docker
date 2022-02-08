import React from "react";
import Cart from './Cart'

const Shop = ({ cartItems, onCheckout }) => {
  return (
    <div>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      </div>
    </div>
  )
}

export default Shop