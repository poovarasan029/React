import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
    return(
        <div>
            <nav >
                <ul>
                    <li> <NavLink  to="/" >Home</NavLink> </li>
                    <li> <NavLink  to="/product" >Product</NavLink></li>
                </ul>

            </nav>
    
        </div>
    ) 
}
export default Nav;