import React, { Component } from 'react';
import Order from '../subComponents/order';

import { shirts } from '../../data/productCardObject';

// import { useNavigate } from 'react-router-dom';

export default function Orders() {
   
        return (
            <React.Fragment>
                <div className="page-parent">
                <Order image={shirts[4]['image']} orderStatus="Delivered" orderDate='Placed on: 6th Sept 1999' title="Maxx New Design"></Order>
                <Order image={shirts[2]['image']} orderStatus="Canceled" orderDate='Placed on: 2nd May 2000' title="Printed Best Shirt"></Order>
                <Order image={shirts[1]['image']} orderStatus="Delivered" orderDate='Placed on: 8th May 1999' title="Maxx New Design"></Order>
                <Order image={shirts[3]['image']} orderStatus="Canceled" orderDate='Placed on: 22nd July 1999' title="Printed Best Shirt"></Order>
                <Order image={shirts[2]['image']} orderStatus="Delivered" orderDate='Placed on: 2nd March 2000' title="Maxx New Design"></Order>
                <Order image={shirts[4]['image']} orderStatus="Canceled" orderDate='Placed on: 10th Oct 1999' title="Printed Best Shirt"></Order>
                </div>
            
            </React.Fragment>

        );
    }

