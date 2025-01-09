import React from "react";
import { useParams } from "react-router-dom";

const AddProduct = (props) => {

    const {id} = useParams();

    

    return (<>
        <h2>Add Or Update Product</h2>
        <form>
            <label htmlFor="productname">Product Name</label><br/>
            <input type="text" name="productname" id="productname" style={{marginBottom:"10px"}} /><br/>
            <label htmlFor="unit">Select Unit</label><br/>
            <select name="unit" id="unit" style={{marginBottom:"10px"}}>
            <option value="ml">mililiter</option>
            <option value="liter">liter</option>
            <option value="gm">gram</option>
            <option value="kg">Kilo gram</option>
            </select><br/>
            <label htmlFor="category">Select Category</label><br/>
            <select name="category" id="category" style={{marginBottom:"10px"}}>
            <option value="Finished">Finished</option>
            <option value="Semi Finished">Semi Finished</option>
            <option value="Subsidiary">Subsidiary</option>
            </select><br/>
            <label htmlFor="productexpiry">Product Expiry Date</label><br/>
            <input type="date" name="productexpiry" id="productexpiry" style={{marginBottom:"10px"}} /><br/>
            <label htmlFor="totalcost">Total Cost</label><br/>
            <input type="number" name="totalcost" id="totalcost" /><br/>
            <label htmlFor="material">material</label><br/>
            <input type="text" name="material" id="material" /><br/><br/>
            <button type="button">Submit</button>
        </form>
    </>)
}

export default AddProduct;