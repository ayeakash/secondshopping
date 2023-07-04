import React, { useState, useContext } from 'react';
import Carousel from '../subComponents/carousel'
import { useNavigate, useParams } from 'react-router-dom';

import productCardObject from '../../data/productCardObject';
import { CartContext } from '../experiments/cartContext';
import Sizes from '../subComponents/sizes';

export default function ProductDetails (props){  

  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // navigates user to different location on site
    const navigate = useNavigate();
    const handleClick = (path, ...rest) =>{
      navigate(path);
      
    }
    
    const { addToCart, cartItems } = useContext(CartContext);
    
      
    const params = useParams();
    const product = productCardObject[params['category']][params['id']]
      

    const handleAddToCart = () => {
      if(cartItems.indexOf(product) !== -1){
        navigate('/cart')
        }
      else(
      addToCart(product)
      )
    }

    // const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

    return (
      <React.Fragment>
        <div className='product-page container page-parent'>
          <div className="product-margin">
        
      <div className='image-slide'>
        <Carousel 
        first ={productCardObject[params['category']][params['id']]['image']} 
        second = {productCardObject[params['category']][params.id]['image']} 
        third ={productCardObject[params['category']][params.id]['image']}>
        </Carousel>
        </div>

      <div className='product-description'>
        {/* <h1>This is ID: {props.match.params.id}</h1> */}
        <p className='price-text'>MAAX</p>
        <p>{productCardObject[params['category']][params['id']]['title']}</p>
        <div className='price-area'>
        <p className='price-text green'>{Math.floor(productCardObject[params['category']][params['id']]['price']/productCardObject[params['category']][params['id']]['mrp']*100)}% off</p>
        <p className='price-text'><s>{productCardObject[params['category']][params['id']]['mrp']}</s></p>
        <p className='price-text'>₹{productCardObject[params['category']][params['id']]['price']}</p>
        </div>
        <p>Select size:</p>
       <Sizes/>
      </div>
      </div>
      </div>      
      <div className='button-grid-buy-cart' onClick={()=>handleClick('/cart')}>
        <button className='custom-button gray' onClick={handleAddToCart}>Add to Cart</button>
        <button className='custom-button yellow' onClick={handleAddToCart}>Buy Now</button>
      </div>

      </React.Fragment>
    );
  }
