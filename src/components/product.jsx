import React, { Component } from 'react';
import shirt from '../startup/images/tshirt-img.png'
import { Button } from '@mui/material';

class Product extends Component {
    state = {  } 
    render() { 
        return (
            <div className="fashion_section">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                    
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man T -shirt</h4>
                                 <p className="price_text">Price  <span >$ 30</span></p>
                                 {/* style="color: #262626;" */}
                                 <div className="tshirt_img"><img src={shirt} alt='This is a product image'/></div>
                                 <div className="btn_main">
                                    <Button variant="contained">Buy Now</Button>
                                    <button className='btn btn-outline-secondary m-2'>See More</button>
                                 </div>
                              </div> 
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
        );
    }
}
 
export default Product;