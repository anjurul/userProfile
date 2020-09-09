import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
           <nav>
               <a href="/user">User Profile</a>
               <a href="/friends">Friends</a>
               <a href="/manage">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Header;