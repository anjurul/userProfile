import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {
    const {img, name, job, email, phone, address, salary,} = props.user;
    return (
        <div className="user-cart">
            <div className="user-cart-img">
                <img  src={img} alt=""/>
            </div>
            <div className="user-info">
                <div class="user-info-list">
                    <h1 class="user-name">{name}</h1>
                    <span>Job: {job} </span>
                    <span>Email: {email} </span>
                    <span>Phone: {phone} </span>
                    <span>Address: {address} </span>
                    <span>Salary: {salary} </span>
        
                    <button 
                        className="main-button"
                        onClick={() => props.handleAddUser(props.user)}
                        >
                            <FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
                    
                </div>
                
                
            </div>
            
        </div>
    );
};

export default User;