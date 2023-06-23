import React, { Component } from 'react';
import {Img} from 'react-image'

class Category extends Component {
    state = {  } 
    render() { 
        return (
            <div className='category'>
                <Img src={this.props.image} className='category-image'></Img>
                <div className='category-title'>{this.props.title}</div>
            </div>
        );
    }
}
 
export default Category; 