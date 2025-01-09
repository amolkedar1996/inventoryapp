import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "./Actions";
import { useNavigate ,Link} from "react-router-dom";

const Products = (props) => {
 
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.ProductsReducer.products;
  });

  console.log("products", products);
  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  const handleAddProduct = () => {
    navigate("/product/add")
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>List Of Products</h2>
      <button type="button" onClick={handleAddProduct}>Add New Product</button>  
      {products?.map((product, ind) => {
        return (
          <div
            key={product.id}
            style={{
              backgroundColor: "rgba(100,200,140,0.5)",
              padding: "10px",
              margin: "10px",
              display:"flex",
              justifyContent:"space-around",
              alignItems:"center"
            }}
          >
            <div>
            <p>Name - {product.name}</p>
            <p>Category - {product.category}</p>
            <p>Total Cost - {product.totalCost}</p>
            <p>
              Number Of Raw Materials Required -{" "}
              {product.listOfMaterials.length}
            </p>
            </div>
            <div>
                <Link to={`/product/update/${product.id}`}><button type="button">Update Product</button></Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
