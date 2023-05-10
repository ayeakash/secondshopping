import React, { Component } from 'react';
import shirt from '../../images/tshirt-img.png'

class ProductS extends Component {
    state = { 
        product1: {
            image: shirt,
            mrp: 599,
            price: 129
        }
     } 
    render() { 
        return (
            <div className='product-parent-div'>
                <img src={this.state.product1.image} alt="Some shirt" />
                <p>MRP: <s>{this.state.product1.mrp}</s></p>
                <p>Price: {this.state.product1.price}</p>

            
            

            </div>
        );
    }
}
 
export default ProductS;