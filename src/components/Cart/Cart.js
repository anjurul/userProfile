import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, user) => total + user.salary, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        total = total + user.salary;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart">
            <p><span>Friends Summery </span> </p>
            <p>Friends Added: {cart.length}</p>
            <p>Friends Salary: {formatNumber(total)} </p>
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Cart;