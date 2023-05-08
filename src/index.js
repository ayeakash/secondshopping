import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Categories from './components/categories';
import Orders from './components/orders';
import Cart from './components/cart'
import NavBar from './components/navbar';
import Carousel from './components/subComponents/carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    {/* <NavBar></NavBar> */}
  <BrowserRouter >
  <Routes>
  
  {/* <Route path='/home' Component={HomePage}></Route>
  <Route path='/login' Component={Login}></Route> */}
  <Route path='/' exact element={<App/>}></Route>
  <Route path='/categories' element={<Categories/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/orders' element={<Orders/>}></Route>
  <Route path='/test' element={<Carousel/>}></Route>

  </Routes>
  </BrowserRouter>
  </div>
);

reportWebVitals();
