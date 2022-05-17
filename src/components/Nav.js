import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render() {
        let activeStyle = {
            textDecoration: "underline",
        };
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="./index.html">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Home</NavLink></li>
                                <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/blog" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Blog</NavLink></li>
                                <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/about" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>About</NavLink></li>
                                <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/products" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Products</NavLink></li>
                                <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/store" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Store</NavLink></li>
                                <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/contact" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Nav;