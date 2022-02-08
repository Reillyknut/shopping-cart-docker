import React, { useState } from "react";

const ProductItem = ({ id, title, quantity, price, onAddToCart, onDeleteProduct }) => {
  const [isEdit, setIsEdit] = useState(false)

  const addItemToCart = () => {
    let objectToAdd = {
      id,
      title,
      price,
    }

    if (quantity > 0) {
      onAddToCart(objectToAdd)
    }
  }

  const toggleEdit = () => {setIsEdit(!isEdit)}

  return (
    <div>
      <div className="product">

        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">${price}</p>
          <p className={quantity <= 0 ? "quantity none-left" : "quantity"}>{quantity} left in stock</p>
          <a onClick={() => onDeleteProduct(id)} href='/#' className="delete-button"><span>X</span></a>
        </div>

        {!isEdit ?
        <div className="actions product-actions">
          <a href='/#' onClick={addItemToCart} className={quantity <= 0 ? "button add-to-cart disabled" : "button add-to-cart"}>Add to Cart</a>
          <a onClick={toggleEdit} href='/#' className="button edit">Edit</a>
        </div>
        :
        <div className="edit-form">
          <h3>Edit Product</h3>
          <form>
            <div className="input-group">
              <label for="product-name">{title}</label>
              <input type="text" id="product-name" value={title}/>
            </div>

            <div className="input-group">
              <label for="product-price">Price</label>
              <input type="text" id="product-price" value={price}/>
            </div>

            <div className="input-group">
              <label for="product-quantity">Quantity</label>
              <input type="text" id="product-quantity" value={quantity}/>
            </div>

            <div className="actions form-actions">
              <a href='/#' className="button">Update</a>
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