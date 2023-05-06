import React, { Component } from 'react';
import CartItem from '../components/cartItem'

class Cart extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cart-parent'>
            <h1 className='cart-child'>My Cart</h1>
            <div className='address-parent'>
                <h1 className='address-child'>Address</h1>
            </div>
            <CartItem></CartItem>
            <button className='btn btn-primary'>+</button>
            <button className='btn btn-danger'>-</button>
            <button className='total-btn'>Total</button>
            <button className='total-btn'>Place Order</button>


            
            
            </div>
        );
    }
}
 
export default Cart;