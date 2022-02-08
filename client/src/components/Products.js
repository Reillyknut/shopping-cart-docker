import React from "react";
import ProductItem from './ProductItem'

const Products = ({ handleAddToCart, products, onDeleteProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      
      {products.map(product =>
        <ProductItem
        id={product.id}
        title={product.title}
        quantity={product.quantity}
        price={product.price}
        onAddToCart={handleAddToCart}
        onDeleteProduct={onDeleteProduct}/>
      )}
    </div>
  )
}

export default Products