import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addProduct, updateProduct, getProduct } from "./Actions";
import { useSelector, useDispatch } from "react-redux";

const AddProduct = (props) => {
  const [formData, setFromData] = useState({
    name: "",
    unit: "",
    category: "",
    expiry: "",
    totalCost: 0,
    listOfMaterials: [],
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.ProductsReducer.product);
  console.log("product..", product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      setFromData({
        name: product.name || "",
        unit: product.unit || "",
        category: product.category || "",
        expiry: product.expiry || "",
        totalCost: product.totalCost || 0,
        listOfMaterials: product.listOfMaterials || [],
      });
    }
  }, [product]);

  useEffect(() => {
    setFromData({
        name: "",
        unit: "",
        category: "",
        expiry: "",
        totalCost: 0,
        listOfMaterials: [],
      });
  },[]);

  return (
    <>
      <h2>Add Or Update Product</h2>
      {!formData ? (
        <div>Loading....</div>
      ) : (
        <form>
          <label htmlFor="productname">Product Name</label>
          <br />
          <input
            type="text"
            name="productname"
            id="productname"
            style={{ marginBottom: "10px" }}
            value={formData.name}
          />
          <br />
          <label htmlFor="unit">Select Unit</label>
          <br />
          <select
            name="unit"
            id="unit"
            style={{ marginBottom: "10px" }}
            value={formData.unit}
          >
            <option value="ml">mililiter</option>
            <option value="liter">liter</option>
            <option value="gm">gram</option>
            <option value="kg">Kilo gram</option>
          </select>
          <br />
          <label htmlFor="category">Select Category</label>
          <br />
          <select
            name="category"
            id="category"
            style={{ marginBottom: "10px" }}
            value={formData.category}
          >
            <option value="Finished">Finished</option>
            <option value="Semi Finished">Semi Finished</option>
            <option value="Subsidiary">Subsidiary</option>
          </select>
          <br />
          <label htmlFor="productexpiry">Product Expiry Date</label>
          <br />
          <input
            type="date"
            name="productexpiry"
            id="productexpiry"
            style={{ marginBottom: "10px" }}
            value={formData.date}
          />
          <br />
          <label htmlFor="totalcost">Total Cost</label>
          <br />
          <input type="number" name="totalcost" id="totalcost" value={formData.totalCost}/>
          <br />
          <label htmlFor="material">material</label>
          <br />
          <input type="text" name="material" id="material"  />
          <br />
          <br />
          <button type="button">Submit</button>
        </form>
      )}
    </>
  );
};

export default AddProduct;
