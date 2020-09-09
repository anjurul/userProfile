import React from 'react';
import fakeDta from '../../fakeData/data';
import { useState } from 'react';
import './UserProfile.css';
import User from '../User/User';
import Cart from '../Cart/Cart';

const Users = () => {
    const first15 = fakeDta.slice(0,15);
    const [users, setUsers] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddUser = (user) =>{
        const newCart = [...cart, user];
        setCart(newCart);
    }

    return (
        <div className="users-container">
            <div className="users">
                {
                    users.map(user => <User 
                        handleAddUser = {handleAddUser}
                        user={user}
                        ></User>)
                } 
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Users; 