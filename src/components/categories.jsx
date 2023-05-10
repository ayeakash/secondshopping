import React, { Component } from 'react';
import HzWrapping from './aligned';
import ProductS from './subComponents/ProductS';
import BottomNavBar from './subComponents/bottomNavbar';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './subComponents/demo'
import FixedBottomNavigation from './subComponents/bottomNavbar';

class Categories extends Component {
    state = {  } 
    render() { 
        return (
            <div className='products-grid'>
            <ProductS>

            </ProductS>
            <FixedBottomNavigation></FixedBottomNavigation>
            
           
            </div>
        );
    }
}

export default Categories;