import React from "react";
import ProductItem from './ProductItem'

const Products = ({ handleAddToCart, products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      
      {products.map(product =>
        <ProductItem
        key={product.id}
        title={product.title}
        quantity={product.quantity}
        price={product.price}
        handleAddToCart={handleAddToCart}/>
      )}
    </div>
  )
}

export default Products