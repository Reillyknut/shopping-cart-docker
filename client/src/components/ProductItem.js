import React, { useState } from "react";
import { productDeleted, productEdited } from '../actions/productsActions';
import { itemAdded } from "../actions/cartItemsActions"
import { useDispatch } from 'react-redux';

const ProductItem = ({ id, title, quantity, price}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setTitle] = useState(title)
  const [cost, setPrice] = useState(price)
  const [amount, setQuantity] = useState(quantity)
  const dispatch = useDispatch()

  const handleAddCartItem = async (e) => {
    e.preventDefault()

    let objectToAdd = {
      productId: id,
      title,
      price,
    }

    if (quantity > 0) {
      dispatch(itemAdded(objectToAdd))
    }
  }

  const handleDeleteProduct = async (e) => {
    e.preventDefault()
    dispatch(productDeleted(id))
  }

  const handleEditProduct = async (e) => {
    e.preventDefault()

    dispatch(productEdited(
      id,
      {
        title: name,
        price: cost,
        quantity: amount,
      },
      toggleEdit
    ))
  }

  const toggleEdit = () => {setIsEdit(!isEdit)}

  return (
    <div>
      <div className="product">

        <div className="product-details">
          <h3>{name}</h3>
          <p className="price">${cost}</p>
          <p className={quantity <= 0 ? "quantity none-left" : "quantity"}>{quantity} left in stock</p>
          <a onClick={handleDeleteProduct} href='/#' className="delete-button"><span>X</span></a>
        </div>

        {!isEdit ?
        <div className="actions product-actions">
          <a href='/#' onClick={handleAddCartItem} className={quantity <= 0 ? "button add-to-cart disabled" : "button add-to-cart"}>Add to Cart</a>
          <a onClick={toggleEdit} href='/#' className="button edit">Edit</a>
        </div>
        :
        <div className="edit-form">
          <h3>Edit Product</h3>
          <form>
            <div className="input-group">
              <label htmlFor="product-name">{name}</label>
              <input type="text" id="product-name" value={name} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="input-group">
              <label htmlFor="product-price">Price</label>
              <input type="text" id="product-price" value={cost} onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <div className="input-group">
              <label htmlFor="product-quantity">Quantity</label>
              <input type="text" id="product-quantity" value={amount} onChange={(e) => setQuantity(e.target.value)}/>
            </div>

            <div className="actions form-actions">
              <a onClick={handleEditProduct} href='/#' className="button">Update</a>
              <a onClick={toggleEdit} href='/#' className="button">Cancel</a>
            </div>
          </form>
        </div>
        }

      </div>
    </div>
  )
}

export default ProductItem