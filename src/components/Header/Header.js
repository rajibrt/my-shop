import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        backgroundColor: "White",
    };

    let activeClassName = "underline";
    return (
        <div className='header'>
            <div className="top-bar">
                <div className="left">
                    <h4>Call: 01711-380-679</h4>
                </div>
                <div className="right">
                    <h4>Write to us : info@raishahost.com</h4>
                </div>
            </div>
            <div className="menu-bar">
                <div className='logo'>
                    <Link to='/'>Lo-Gooo-></Link>
                </div>
                <nav className='link'>
                    <NavLink to='/home' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    } >Home</NavLink>
                    <Link to='/about'>About</Link>
                    <Link to='/products'>Products</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;