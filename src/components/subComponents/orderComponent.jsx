import React, { Component } from 'react';
import { Img } from 'react-image';
import { useNavigate } from 'react-router-dom';


export default function OrderComponent(props) {
    const navigate = useNavigate();
    const handleClick = (path) =>{
    navigate(path)}

    const handleClass = (props) =>{
        if (props.orderStatus ==='Delivered'){
            return ('green')
        }
        return ('red')
    }
 
        return (
            <React.Fragment>
            <div className='order-parent' onClick={()=>handleClick('/order-details')}>
                <Img src={props.order.image}></Img>
                <div className='order-child-two'>
                <p className={'order-status button-border ' + handleClass(props)}>{props.order.orderStatus}</p>
                <p>Placed on: {props.order.orderDate}</p>
                <p className='title'>{props.order.title}</p>
                </div>
            </div> 

            </React.Fragment>
        );
    }