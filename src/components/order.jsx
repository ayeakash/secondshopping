import React, { Component } from 'react';
import shirt from '../startup/images/dress-shirt-img.png'

class Order extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <div className='order-parent'>
                <img src={shirt} alt="Product Image" className='order-child'/>
                <div className='order-child'>
                <p>Order status</p> 
                <p>Product Name</p>
                <p>More details</p>
                </div>
            </div> 

            </React.Fragment>
        );
    }
}
 
export default Order;