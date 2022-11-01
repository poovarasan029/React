import { Route, Routes } from "react-router-dom";
import Noo from "./class";
import Home from "./home";
import Nav from "./nav";
import Product from "./product";

function Approute() {
    return (
        <div>
            <Nav></Nav>
        <Routes>
            <Route path="/"element={<Home></Home>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
           
      </Routes>
    
      <div>
      <Noo></Noo>
      </div>
        </div>
    )
}
export default Approute;