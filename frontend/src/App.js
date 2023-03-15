import React, { useState, useEffect, Fragment } from 'react';
import AddProductForm from './forms/AddProductForm';
import EditProductForm from './forms/EditProductForm.js';
import ProductTable from './tables/ProductTable.js';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/product');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    const response = await axios.post('/product', product);
    setProducts([...products, response.data]);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`/product/${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`/product/${id}`, updatedProduct);
    setProducts(
      products.map((product) =>
        product.id === response.data.id ? response.data : product
      )
    );
  };

  const editRow = (product) => {
    setEditing(true);
    setCurrentProduct(product);
  };

  return (
    <div className="container">

       <h1>Inventory products</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit product</h2>
              <EditProductForm
                editing={editing}
                setEditing={setEditing}
                currentProduct={currentProduct}
                updateProduct={updateProduct}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add product</h2>
              <AddProductForm addProduct={addProduct} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View products</h2>
          <ProductTable
            products={products}
            editRow={editRow}
            deleteProduct={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default App;