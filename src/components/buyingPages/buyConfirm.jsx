import React, {useContext} from 'react';
import ProgressStepper from './progressStepper';
import AddressCard from '../addressPages/addressCard';
import CartItem from '../subComponents/cartItem';
import PriceBreakDown from './priceBreakDown';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

import { addressObject } from '../../data/addressObject';
import { CartContext } from '../experiments/cartContext';


const BuyConfirm = (props) => {
    const { cartItems, cartTotal } = useContext(CartContext);

    const navigate = useNavigate();
    
    const handleClick = (path) =>{
        navigate(path)
    }

    return ( 
    <div className='buy-parent'>
        <div>
            <ProgressStepper activeStep={1} step1="Cart" step2="Summary" step3="Confirmation"/>         
        </div>
        <div className='left-margin-for-text'>
            Deliver to,             
        </div>
        <AddressCard onEdit={()=>handleClick('/new-address  ')} data = {addressObject[0]}></AddressCard>
            
        <div>
        {cartItems.map((item) => (
        <div key={item.id}>
          <span>
            <CartItem image={item.image} 
            price={item.price} title={item.title} 
            description={item.description}
            show={false}
            data={item}
            >
            </CartItem></span>
        </div>
      ))}
        </div>
        <div className='price-breakdown-details'>

            {/* logic to be fixed later */}

            <PriceBreakDown/>
        </div>
        <div className="cart-bottom-bar">
            <button className='custom-button grey'>Total: ₹{cartTotal}</button>
            <button className='custom-button yellow'
             onClick={()=>handleClick('/payments')}>Proceed to buy</button>
        </div>
    </div>
     );
}
 
export default BuyConfirm;