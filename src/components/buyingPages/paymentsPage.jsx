import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressStepper from './progressStepper';
import { CartContext } from '../experiments/cartContext';
import { addressObject } from '../../data/addressObject';

const PaymentsPage = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const { cartItems, cartTotal } = useContext(CartContext);
    
    const navigate = useNavigate();
    
    const handleClick = (path) =>{
        navigate(path)
        if(path =='/payments'){
            console.log('Items:', cartItems, "Address:", mainAddress)
        }
    }

    const [mainAddress] = addressObject.filter(address=>address.default)
    
    const radioInput = (id) => {
        const handleChange = () => {
          setSelectedOption(id);
        };
    
        return (
          <div className='radio-button'>
            <input
              type="radio"
              id={id}
              checked={selectedOption === id}
              onChange={handleChange}
              className='input-radio'
            />
            <label htmlFor={id}>{id}</label>
          </div>
        );
      };

    return (  
    <div className='buy-parent'>
        <div>
            <ProgressStepper activeStep={2} step1="Cart" step2="Summary" step3="Confirmation"/>         
        </div>

        <div className='radio-button'>
            <div>Offer 1</div>
            <div>Offer 2</div>
        </div>
            
        <div className='payment-options'>
            {radioInput('UPI')}
            {radioInput('Debit Card')}
            {radioInput('Net Banking')}
            {radioInput('Cash on Delivery')}
        </div>

        <div className="cart-bottom-bar">
            <button className='custom-button grey' onClick={()=>handleClick('/buy-now')}>Total: ₹{cartTotal}</button>
            <button className='custom-button yellow'
             onClick={()=>handleClick('/success')}>Confirm Order</button>
        </div>
    </div>
    );
}
 

export default PaymentsPage;