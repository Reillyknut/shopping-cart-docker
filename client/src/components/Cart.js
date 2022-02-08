import React from "react";

const Cart = ({ cartItems, onCheckout }) => {


  return (
    <div className="cart">
      {cartItems.length === 0
      ?
      <>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a href='/#' className="button checkout disabled">Checkout</a>
      </>
      :
      <>
        <table className="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartItems.map(item => // need to add id to object we make in App.js
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td>${(item.price * item.amount).toFixed(2)}</td>
            </tr>  
            )}
          </tbody>
        </table>
        <a onClick={onCheckout} href='/#' className="button checkout">Checkout</a>
      </>
      }
    </div>
  )
}

export default Cart