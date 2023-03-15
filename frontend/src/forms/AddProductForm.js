import React, { useState } from 'react';

const AddProductForm = (props) => {
  const initialFormState = { id: null, name: '', description: '', category: '', price: '' };
  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!product.name || !product.description || !product.category || !product.price) return;
        props.addProduct(product);
        setProduct(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleInputChange}
      />
      <label>Category</label>
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleInputChange}
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        min="0"
        value={product.price}
        onChange={handleInputChange}
      />
      <button>Add new product</button>
    </form>
  );
};

export default AddProductForm;