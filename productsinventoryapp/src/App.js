import React,{lazy,Suspense} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


const Products = lazy(() => import("./Products"));
const AddProduct = lazy(() => import("./AddProduct"));

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/product/add" element={<AddProduct />} />
          <Route exact path="/product/update/:id" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
