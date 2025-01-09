import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const product = useSelector((state) => state.ProductsReducer.product);
  

  const rawMaterials = useSelector(
    (state) => state.ProductsReducer.rawMaterials
  );
  
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
  }, []);

  const handleChange = (e) => {
    
    if (e.target.name == "listOfMaterials") {
      setFromData({ ...formData, [e.target.name]: [e.target.value] });
    } else {
      setFromData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    dispatch(addProduct(formData));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
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
            name="name"
            id="productname"
            style={{ marginBottom: "10px" }}
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="unit">Select Unit</label>
          <br />
          <select
            name="unit"
            id="unit"
            style={{ marginBottom: "10px" }}
            value={formData.unit}
            onChange={handleChange}
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
            onChange={handleChange}
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
            name="expiry"
            id="productexpiry"
            style={{ marginBottom: "10px" }}
            value={formData.expiry}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="totalcost">Total Cost</label>
          <br />
          <input
            type="number"
            name="totalCost"
            id="totalcost"
            value={formData.totalCost}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="material">material</label>
          <br />
          <select
            name="listOfMaterials"
            multiple
            value={formData.listOfMaterials}
            style={{ height: "200px" }}
            onChange={handleChange}
          >
            {rawMaterials?.map((material, ind) => {
              return <option value={material.name}>{material.name}</option>;
            })}
          </select>
          <br />
          <br />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default AddProduct;
