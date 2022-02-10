import React from "react";
import ProductItem from './ProductItem'

const Products = ({ onAddToCart, products, onDeleteProduct, onEditProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      
      {products.map(product =>
        <ProductItem
          key={product._id}
          id={product._id}
          title={product.title}
          quantity={product.quantity}
          price={product.price}
          onAddToCart={onAddToCart}
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct}
        />
      )}
    </div>
  )
}

export default Products
