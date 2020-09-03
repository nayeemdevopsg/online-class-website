import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce(  (sum, crs)  => sum + crs.price, 0);
    
    return (
        <div style={{textAlign: "center", marginLeft: "12px"}}>
            <h1>Total Course Fee Summary:</h1>
            <p> Total Course Selected: {props.cart.length} </p>
            <p> Total Price: {total} </p>
        </div>
    );
};
export default Cart;