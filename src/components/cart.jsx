import React, { Component } from 'react';
import CartItem from '../components/cartItem'
import PriceDetails from './subComponents/priceDetails';

class Cart extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cart-parent'>
            <h1 className='cart-child'>My Cart</h1>
            <div className='address-parent'>
                <div className='address-child'>
                <ul>
                    <li>
                    <h3>Address: Akash Markad, 411007
                    </h3>
                    </li>
                    <li>
                    <p>Office No 04, First floor, Business...</p>
                    </li>
                </ul>
            </div>
            </div>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <PriceDetails></PriceDetails>
            <button className='total-btn btn btn-secondary'>Total</button>
            <button className='total-btn btn btn-secondary'>Place Order</button>

            
            
            </div>
        );
    }
}
 
export default Cart;