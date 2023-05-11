import React, { Component } from 'react';
import PrimarySearchAppBar from './subComponents/topNavBar';
import FixedBottomNavigation from './subComponents/bottomNavbar';
import Product2 from './subComponents/product2';

class Categories extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <span className='top-bar'>
            <PrimarySearchAppBar></PrimarySearchAppBar>
                </span>
            <div className='grid-container'>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                <div className='grid-item'>
                <Product2></Product2>
                </div>
                
            </div>
                
            
            
            <FixedBottomNavigation></FixedBottomNavigation>
            
           
            </React.Fragment>
        );
    }
}

export default Categories;