import React from "react";

const Cart = ({ cartItems, onCheckout }) => {
  console.log(cartItems)
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
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${Number(item.price * item.quantity).toFixed(2)}</td>
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