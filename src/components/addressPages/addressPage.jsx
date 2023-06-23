import React, { Component } from 'react';
import AddressCard from './addressCard';
import { useNavigate } from 'react-router-dom';

import { addressObject } from '../../data/addressObject';

export default function AddressPage(){

    const navigate = useNavigate()
    const handleClick = (path   ) =>{
        navigate(path)
    }


        return (
            <div className='cart-parent'>
                <div className="cart-top-bar">
                <p className='cart-bar-one'>Address: XYZ, Sarasvati sadan, Shevgaon-Georai road...</p>
                <button className='cart-bar-two yellow' onClick={() => handleClick('/new-address')}>Change</button>
                </div>
                {addressObject.map((address)=>{
                    return <AddressCard onEdit={() => handleClick('/new-address')} key={address.id} data={address}></AddressCard>
                })}
            </div>
        );
    }
