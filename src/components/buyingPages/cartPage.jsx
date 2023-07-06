import React, { useContext, useState, useEffect} from 'react';
import CartItem from '../subComponents/cartItem';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../experiments/cartContext'
import { ToastContainer, toast } from 'react-toastify';
import TotalPopUp from '../subComponents/totalPopUp';

export default function CartPage(){
  const { cartTotal, cartItems, removeFromCart, setCartTotal} = useContext(CartContext);

    const [popup, setPopup] = useState(false)
    
    const navigate = useNavigate();
    const handleSubmit = (path) =>{
      if(cartTotal === 0){
      }
      else(
        navigate(path))
  }
    const handleClick = (path) =>{
    navigate(path)
  }

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

    const handlePlus = (item)=>{
      let newTotal = cartTotal + item.price
      setCartTotal(newTotal)
    }

    const handleMinus = (item)=>{
        let newTotal = cartTotal
        if((newTotal - item.price)>=0){
          newTotal -= item.price
          setCartTotal(newTotal)

        }
    }

    const handleTotalShow = () =>{
      if(cartItems.length === 0){
  
      }
      if(popup == true){
        setPopup(false)
      }
      if(cartTotal === 0){
        setPopup(false)
      }
      else setPopup(true)
    }

    useEffect(() => {
      let newTotal = cartTotal;
      cartItems.forEach((item) => {
        newTotal += item.price;
      });
      setCartTotal(newTotal);
    }, [cartItems]);
 
    return (
        <div className='cart-parent'>
        
            <div className="cart-top-bar" >
                <p className='cart-bar-one'>Address: XYZ, Sarasvati sadan, Shevgaon-Georai road...</p>
                <button className='cart-bar-two' onClick={() => handleClick('/address')}>Change</button>
            </div>
        <div className='cart-itmes' onClick={()=>setPopup(false)}>         
        {cartItems.map((item) => (
        <div key={item.id}>
          <span>
            <CartItem image={item.image} 
            onMinus = {()=>handleMinus(item)} 
            onPlus = {()=>handlePlus(item)} 
            price={item.price} title={item.title} 
            handleDelete={() => handleRemoveFromCart(item)}  
            description={item.description}
            data={item}
            show={true}
            >
            </CartItem></span>
            
        </div>
        
      ))}

      

        </div>
      
        <div className="cart-bottom-bar">
        {popup && <TotalPopUp closePopup={()=>setPopup(false)} cartItems={cartItems}/>}
            <button className='custom-button grey' onClick={handleTotalShow}>Total: ₹{cartTotal}</button>
            <button className='custom-button yellow'
             onClick={()=>handleSubmit('/buy-now')}>Proceed to buy</button>
        </div>
        </div>
    );
    }


    