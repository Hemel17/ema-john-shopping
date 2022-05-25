import React from 'react';
import './Cart.css'



const Cart = ({cart}) => {

    let total = 0;
    for( const product of cart){
        total = total + product.price;
    }

    let shipping = 0;
    for(const product of cart){
        shipping = shipping + product.shipping;
    }

    const tax = (total * 0.01).toFixed(2);

    const grand = (total + shipping + parseFloat(tax)).toFixed(2);
    

    return (
        <div className='cart'>
            <h3>Cart container</h3>
            <p>Item added: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grand}</h4>
        </div>
    );
};

export default Cart;