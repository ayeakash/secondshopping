import React, {useContext} from 'react';
import { CartContext } from '../experiments/cartContext';


const PriceBreakDown = () => {
    const { cartItems } = useContext(CartContext);
    let cartMrp = 0;
    cartItems.map(item => cartMrp += item['mrp'])
    
    let cartPrice = 0;
    cartItems.map(item => cartPrice += item['price'])

    let discount = cartMrp - cartPrice

    return ( 
        <div>
        Price Details:
        <div className='price-parts'>
        <div>MRP: {cartItems.length} items:</div> <div className='child-two'> <s>₹{cartMrp}</s></div>
        </div>
        <div className="price-parts">
        <div>Discount:</div><div className='child-two green'>-₹{discount}</div>
        </div>
        <div className="price-parts">
        <div>Delivery Charges:</div> <div className='child-two green'>Free Delivery</div>
        </div>
        <div className="price-parts">
        <div>Total Amount:</div> <div className='child-two'>₹{cartPrice}</div>
        </div>    
        <div className='total-price green'>
        You will save ₹{discount} on this purchase
        </div>
        </div>
     );
}
 
export default PriceBreakDown;