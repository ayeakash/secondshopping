import React, { Component } from 'react';
import VerticalLinearStepper from './stepper';
import Order from './order';

import { shirts } from '../../data/productCardObject';

export default function OrderDetails(props){

    return(
        <div className='page-parent order-page'>
            <Order image={shirts[1]['image']} orderStatus="Delivered" orderDate='Delivered on: 2nd May 2023' title="Printed Best Shirt"></Order>
            <VerticalLinearStepper></VerticalLinearStepper>
        </div>

    )

}