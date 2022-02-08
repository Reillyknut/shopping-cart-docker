const AddProduct = ({ handleAdd }) => {
  return (
    <div className="add-form visible">
      <p>
        <a href='/#' onClick={handleAdd} className="button add-product-button">Add A Product</a>
      </p>
    </div>
  )
}

export default AddProduct