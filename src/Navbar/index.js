import React from "react";
import './nav.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            
            <a href="/Login">Login</a>
            <a href="/Products">Products</a>
            <a href="/ProductsDetails">View More</a>

            <button className="adding">Add Product</button>

    </nav>

)

};

export default Navbar;