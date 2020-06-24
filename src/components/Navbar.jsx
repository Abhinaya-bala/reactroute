import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {

    return (
        <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-Evenly" }}>
            <Link to="/"><label>Home</label></Link>
            <Link to="/order"><label>Order</label></Link>
            <Link to="/cart"><label>Cart</label></Link>
            <Link to="/login"><label>Login</label></Link>
            <Link to="/product"><label>Product</label></Link>
        </div>
    )
}

export default Navbar;