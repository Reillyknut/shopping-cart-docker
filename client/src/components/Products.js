import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import ProductItem from './ProductItem'
import { productsReceived } from "../actions/productsActions"

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products)

  useEffect(() => {
    const getProducts = async () => {
      dispatch(productsReceived())
    }
    getProducts()
  }, [dispatch])

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
        />
      )}
    </div>
  )
}

export default Products
