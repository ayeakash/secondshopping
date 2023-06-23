import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Img } from 'react-image';


export default function CartItem(props){

    const navigate = useNavigate();
    const handleClick = (path) =>{
    navigate(path)
    }

    const [num, setNum] = useState(1)

    const handleIncrement = () =>{
        const newNum = num + 1;
        setNum(newNum); 
        props.onPlus()
    }

    const handleDecrement = () =>{
        if (num > 1 ){
            const newNum = num -1;
            setNum(newNum)
            }
        if(num == 1){
            props.handleDelete()
        }
       props.onMinus()
        
    }

    // console.log('Prop data', props.data)

    return (

        <div className='grid-cart-container'>  


            <div className='cart-child-one'>
            <Img src={props.image} className='cart-image' onClick={() => handleClick('/product-details/' + props['data']['category'] + '/'+ props['data']['id'])}></Img>
            </div>
            <div className='cart-child-two'>
                <p className='cart-title'>{props.title}</p>
                <p>{props.description}</p>
                <p className='price'>₹{props.price}</p>
                <div className="buttons">
                    {props.show && <button className='btn-red' onClick={handleDecrement} >{props.show && "-"}</button>}
                    {props.show && <input type="text" value={num} disabled maxLength={2} className='input-number'/>}
                    {props.show && <button className='btn-blue' onClick={handleIncrement}>+</button>}
                    {props.show && <button className='cart-delete-button' onClick={props.handleDelete}>X</button>}
                </div>
            </div>

        </div>
    );
}
