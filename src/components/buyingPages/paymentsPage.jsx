import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressStepper from './progressStepper';
import { CartContext } from '../experiments/cartContext';
import { addressObject } from '../../data/addressObject';
import TempPage from '../otherPages/tempPage';

const PaymentsPage = () => {

    const { cartItems, cartTotal } = useContext(CartContext);
    
    const navigate = useNavigate();
    
    const handleClick = (path) =>{
        navigate(path)
        if(path =='/payments'){
            console.log('Items:', cartItems, "Address:", mainAddress)
        }
    }

    const [mainAddress] = addressObject.filter(address=>address.default)
    
    
    return (  
        <div className='buy-parent'>
            <div>
            <ProgressStepper activeStep={2} step1="Cart" step2="Summary" step3="Confirmation"/>         
            </div>
            <TempPage data={addressObject[1]}/>
            
            <div className="cart-bottom-bar">
            <button className='custom-button grey' onClick={()=>handleClick('/buy-now')}>Total: ₹{cartTotal}</button>
            <button className='custom-button yellow'
             onClick={()=>handleClick('/payments')}>Confirm Order</button>
        </div>
        </div>
    );
}
 

export default PaymentsPage;