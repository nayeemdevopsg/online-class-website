import React from 'react';


const Cart = (props) => {  
    


    return (
        <div style={{textAlign: "center", marginLeft: "12px"}}>
            <h1>Total Course Fee Summary:</h1>
            <p> Total Course Selected: {props.cart.length} </p>
            <p> Total Price: </p>
        </div>
    );
};
export default Cart;