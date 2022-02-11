import React, { useState } from "react";
import { productAdded } from '../actions/productsActions';
import { useDispatch } from 'react-redux';

const AddProduct = () => {
  const [addForm, setAddForm] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const dispatch = useDispatch();

  const reset = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
    toggleAdd()
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    dispatch(productAdded({title, price, quantity}, reset))
  }

  let addProductClass = `add-form ${addForm ? 'visible' : ''}`
  let addButtonClass = `add-form ${addForm ? 'button hidden' : 'button add-product-button'}`
  const toggleAdd = () => {setAddForm(!addForm)}

  return (
    <div className={addProductClass}>
      <div>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
          </div>

          <div className="actions form-actions">
            <a href='/#' onClick={handleAddProduct} className="button">Add</a>
            <a href='/#' onClick={toggleAdd} className="button">Cancel</a>
          </div>
        </form>
      </div>

      <p><a href='/#' onClick={toggleAdd} className={addButtonClass}>Add A Product</a></p>
      
    </div>
  )
}

export default AddProduct