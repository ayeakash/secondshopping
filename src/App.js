import React, { Component } from 'react';

import './App.css';
import NavBar from './components/navbar';
import Banner from './components/banner';
import Product from './components/product';
import Arrow from './components/arrow';
import banner from './images/banner.png'

function App() {
  return (
    <React.Fragment>
      <div className="App container m-3" src={banner} >
    
      <div>
      <p>Logo</p>
      </div>
      <NavBar></NavBar>
      <div>
        <Banner></Banner>
      </div>
      <div className ="align-parent">
        <div className='align-child'>
          <Product ></Product>
        </div>
        <div className='align-child'>
          <Product></Product>
        </div>
        <div className='align-child'>
          <Product></Product>
        </div>
        <div className='align-child'>
          <Product></Product>
        </div>
      </div>
      <Arrow></Arrow>

    </div>
    </React.Fragment>
  );
}

export default App;
