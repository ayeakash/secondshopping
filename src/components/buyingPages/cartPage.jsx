import React, { useContext, useState, useEffect} from 'react';
import CartItem from '../subComponents/cartItem';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../experiments/cartContext'
import { ToastContainer, toast } from 'react-toastify';

export default function CartPage(){
  const { cartTotal, cartItems, removeFromCart, setCartTotal} = useContext(CartContext);

    const [total, setTotal]= useState(0)
    
    const navigate = useNavigate();
    const handleSubmit = (path) =>{
      if(total === 0){
        err()
      }
      else(
        navigate(path))
  }
    const handleClick = (path) =>{
    navigate(path)
  }

//   console.log('cart items', cartItems)

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

    let cartSum = 'Breakdown: '
    cartItems.map(item=>{
      cartSum += `${item.title}: ${item.price}, `
    })
    
    const notify = () => toast.info(
      cartSum, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",});

    const err = () => toast.error(
      'Please Add Items to the Cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",});
      

    const handleTotalShow = () =>{
      if(cartItems.length === 0){
        err()
      }
      else notify()
    }

    useEffect(() => {
      let newTotal = cartTotal;
      cartItems.forEach((item) => {
        newTotal += item.price;
      });
      setTotal(newTotal);
    }, [cartItems]);
 
    return (
        <div className='cart-parent'>
            <div className="cart-top-bar">
                <p className='cart-bar-one'>Address: XYZ, Sarasvati sadan, Shevgaon-Georai road...</p>
                <button className='cart-bar-two' onClick={() => handleClick('/address')}>Change</button>
            </div>
        <div className='cart-itmes'>         
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
        
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />


        <div className="cart-bottom-bar">
            <button className='custom-button grey' onClick={handleTotalShow}>Total: ₹{cartTotal}</button>
            <button className='custom-button yellow'
             onClick={()=>handleSubmit('/buy-now')}>Proceed to buy</button>
        </div>
        </div>
    );
    }


    