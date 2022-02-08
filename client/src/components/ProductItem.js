import React from "react";

const ProductItem = ({ title, quantity, price, handleAddToCart }) => {
  const addItemToCart = () => {
    let objectToAdd = {
      title,
      price,
    }

    handleAddToCart(objectToAdd)
  }

  return (
    <div>
      <div className="product">

        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">${price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <div className="actions product-actions">
            <a href='/#' onClick={addItemToCart} className="button add-to-cart">Add to Cart</a>
            <a href='/#' className="button edit">Edit</a>
          </div>
          <a href='/#' className="delete-button"><span>X</span></a>
        </div>

        <div className="edit-form">
          <h3>Edit Product</h3>
          <form>
            <div className="input-group">
              <label for="product-name">Product Name</label>
              <input type="text" id="product-name" value="Apple 10.5-Inch iPad Pro"/>
            </div>

            <div className="input-group">
              <label for="product-price">Price</label>
              <input type="text" id="product-price" value="649.99"/>
            </div>

            <div className="input-group">
              <label for="product-quantity">Quantity</label>
              <input type="text" id="product-quantity" value="2"/>
            </div>

            <div className="actions form-actions">
              <a href='/#' className="button">Update</a>
              <a href='/#' className="button">Cancel</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ProductItem