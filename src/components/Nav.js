import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }
    return <div>
        {auth ?
            <ul className="nav-ul">
                <Link to="/"><img
                    className="logo"
                    alt="logo123"
                    src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?size=626&ext=jpg"
                /></Link>
                <li className="title"><Link to="/">E-Shop</Link></li>

                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>  <Link to="/login" onClick={logout}>Logout</Link></li>
            </ul>
            :
            <>
                <ul className="nav-ul" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <Link to="/"><img
                            className="logo"
                            alt="logo123"
                            src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?size=626&ext=jpg"
                        /></Link>
                        <li className="title"><Link to="/">E-Shop</Link></li>
                    </div>
                    <div>
                        <ul className="nav-right" style={{ display: "flex", listStyleType: "none", justifyContent: "flex-end", alignItems: "center" }}>
                            <li style={{ marginRight: "10px" }}> <Link to="/signup">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </ul>

            </>
        }
    </div >
}

export default Nav;