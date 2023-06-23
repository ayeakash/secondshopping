import React, { Component } from 'react';
import { Img } from 'react-image';
import { useNavigate } from 'react-router-dom';


export default function Order(props) {
    const navigate = useNavigate();
    const handleClick = (path) =>{
    navigate(path)}

    const handleClass = (props) =>{
        if (props.orderStatus ==='Delivered'){
            return ('bg-blue')
        }
        return ('bg-red')
    }
 
        return (
            <React.Fragment>
            <div className='order-parent' onClick={()=>handleClick('/order-details')}>
                
                <Img src={props.image} className='order-image'></Img>
                
                <div className='order-child-two'>
                <button className={'order-status button-border ' + handleClass(props)}>{props.orderStatus}</button>
                <p>{props.orderDate}</p>
                <p className='title'>{props.title}</p>
                </div>
            </div> 

            </React.Fragment>
        );
    }