import React, { Component } from 'react';
import mobile from '../images/mobile-img.png'

class CartItem extends Component {
    state = {  } 
    render() { 
        return (
            <div className='cart-item-parent'>

                <div className='cart-image-parent'>
                <div >
                <img src={mobile} alt="product (Add)" className='cart-image'/>
                </div>
                <div className='btn-grid-parent'>
                <button className='btn btn-secondary'>Qty: 1</button>

                <div className='plus-minus-btn'>
                <button className='btn btn-primary'>+</button>
                <button className='btn btn-danger'>-</button>
                </div>
                </div>

                </div>
                <div className='cart-item-child-1'>
                    <ul>
                        <li><strong>
                            ADIDAS Men Grey Sports Sandles
                            </strong>
                            </li>
                        <li>Size: 9</li>
                        
                    </ul>
                <div className='price-grid'>

                <h3><strong>
                    <s>
                        $2,799
                    </s>
                </strong>                    
                </h3>
                <h3><strong>
                        $1,399
                </strong>                    
                </h3>
                <h3><strong>
                        50% off
                </strong>                    
                </h3>
                </div>
                Delivery in 2 days, Tue <strong>FREE Delivery <s>$40</s></strong>
                </div>
                
            </div>
        );
    }
}
 
export default CartItem;