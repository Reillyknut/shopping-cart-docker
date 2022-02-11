import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { cartItemsReceived, checkedOut } from "../actions/cartItemsActions"

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems)

  useEffect(() => {
    const getProducts = async () => {
      dispatch(cartItemsReceived())
    }
    getProducts()
  }, [dispatch])

  const handleCheckout = async (e) => {
    e.preventDefault()
    dispatch(checkedOut())
  }

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
            {cartItems.map(item =>
              <tr key={item.productId}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${Number(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            )}
          </tbody>
        </table>
        <a onClick={handleCheckout} href='/#' className="button checkout">Checkout</a>
      </>
      }
    </div>
  )
}

export default Cart
