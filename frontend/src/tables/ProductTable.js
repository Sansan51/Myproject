import React from 'react'

const ProductTable = props => (

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Category</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(product)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteProduct(product.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No products</td>
        </tr>
      )}
    </tbody>
  </table>
)
export default ProductTable