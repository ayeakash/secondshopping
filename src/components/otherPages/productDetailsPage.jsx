import React, { useContext } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Carousel from '../subComponents/carousel'
import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

import productCardObject from '../../data/productCardObject';
import { CartContext } from '../experiments/cartContext';


export default function ProductDetails (props){  

    const navigate = useNavigate();
    const handleClick = (path, ...rest) =>{
      navigate(path);
      
    }
    
    const { addToCart, cartItems } = useContext(CartContext);
    
      
    const params = useParams();
    const product = productCardObject[params['category']][params['id']]
      

      const handleAddToCart = () => {
        if(cartItems.indexOf(product) != -1){
          navigate('/cart')
          }
        else(
        addToCart(product)
        )
        // console.log(product)
      }

    return (
      <React.Fragment>
        <div className='product-page container page-parent'>
          <div className="product-margin">
{/* 
        <div className='back-icon' >
        <ArrowBackIcon onClick={()=>handleClick('/')}></ArrowBackIcon>
        </div> */}
        
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
        <div className='product-size'>
        <div>XS</div>
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
        <div>XXXL</div>
        
        </div>
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
