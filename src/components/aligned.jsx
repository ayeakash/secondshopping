import React, { Component } from 'react';
import Product from './product';

class alignment extends Component {
    state = {  } 
    render() { 
        return (
    <React.Fragment>
     <div className='float-child'>
      <Product></Product>
      </div>
      <div className='float-child'>
      <Product></Product>
      </div>
      <div className='float-child'>
      <Product></Product>
      </div>
      
      
    </React.Fragment>
        );
    }
}
 
export default alignment;