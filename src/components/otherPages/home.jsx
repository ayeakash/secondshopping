import React, { useState } from 'react';
import '../../App.css';
import ProductCard from '../../components/subComponents/productCard';
import Carousel from '../../components/subComponents/carousel';

import banner from '../../data/images/banner.png'
import banner2 from '../../data/images/banner2.png';
import banner3 from '../../data/images/banner3.png';

import {shirts, pants, shoes} from '../../data/productCardObject';

export default function HomePage(){
      return (
      <React.Fragment>      
      <div className='app-container page-parent'>
      <div className='image-slide'>
        <Carousel first={banner} second={banner2} third={banner3} 
        path1='/shirts' path2='/pants' path3='/shoes'/>
      
      </div>
      
      <div className ="align-parent">
        <div className='align-child'>
          <ProductCard data={pants[3]}/>
        </div>
        <div className='align-child'>
          <ProductCard data={shoes[4]}/>
        </div>
        </div>
      <div className ="align-parent">
        <div className='align-child'>
          <ProductCard data={shirts[3]}/>
        </div>
        <div className='align-child'>
          <ProductCard data={pants[2]}/>
        </div>
        </div>
      <div className ="align-parent">
        <div className='align-child'>
          <ProductCard data={shirts[2]}/>
        </div>
        <div className='align-child'>
          <ProductCard data={shoes[5]}/>
        </div>
        </div>
        <div className ="align-parent">
        <div className='align-child'>
          <ProductCard data={shirts[1]} />
        </div>
        <div className='align-child'>
          <ProductCard data={pants[2]}/>
        </div>
        </div>
        <div className ="align-parent">
        <div className='align-child'>
          <ProductCard data={shoes[3]}/>
        </div>
        <div className='align-child'>
          <ProductCard data={shirts[4]}/>
        </div>
        </div>
        </div>
    </React.Fragment>
        );
    }
