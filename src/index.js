import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './components/experiments/cartContext';

import Categories from './components/otherPages/categoriesPage';
import CartPage from './components/buyingPages/cartPage';
import SignIn from './components/signInPages/signIn';
import ProductDetails from './components/otherPages/productDetailsPage';
import Layout from './components/navBarPages/layout';

// CSS Imports
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './components/otherPages/home';
import Shirts from './components/otherPages/shirtsPage';
import Shoes from './components/otherPages/shoesPage';
import Pants from './components/otherPages/pantsPage';

import AddressPage from './components/addressPages/addressPage';
import AddAddress from './components/addressPages/addAddress';

// Buy and Order pages

import Orders from './components/otherPages/ordersPage';
import OrderDetails from './components/subComponents/orderDetails';
import BuyPage from './components/buyingPages/buyPage';
import ProfilePage from './components/otherPages/profilePage';
import BuyConfirm from './components/buyingPages/buyConfirm';
import PaymentsPage from './components/buyingPages/paymentsPage';

import UploadMainPage from './components/uploadPages/uploadMainPage';

import SearchPage from './components/navBarPages/searchPage';
import Temp from './components/otherPages/tempPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-container">
  <CartProvider>
    <App />
  
  <BrowserRouter >
  <Layout>
  <Routes>
  <Route path='/product-details/:category/:id' element={<ProductDetails/>}></Route>
  <Route path='/address/:id' element={<AddressPage/>}></Route> 

  <Route path='/shirts' element={<Shirts/>}></Route>
  <Route path='/shoes' element={<Shoes/>}></Route>
  <Route path='/pants' element={<Pants/>}></Route> 
  <Route path='/profile' element={<ProfilePage/>}></Route> 
  <Route path='/address' element={<AddressPage/>}></Route> 
  <Route path='/new-address' element={<AddAddress/>}></Route> 
  
  
  <Route path='/buy' element={<BuyPage/>}></Route> 

  <Route path='/' exact element={<HomePage/>}></Route>
  <Route path='/categories' element={<Categories/>}></Route>
  <Route path='/login' element={<SignIn/>}></Route>
  <Route path='/orders' element={<Orders/>}></Route>
  <Route path='/order-details' element={<OrderDetails/>}></Route>

  
  <Route path='/cart' element={<CartPage/>}></Route>
  <Route path='/buy-now' element={<BuyConfirm/>}></Route>
  <Route path='/payments' element={<PaymentsPage/>}></Route>
  

  <Route path='/temp' element={<Temp/>}></Route>
  <Route path='/new-product' element={<UploadMainPage/>}></Route>

  <Route path='/search' element={<SearchPage/>}></Route>
  </Routes>
  </Layout>



  </BrowserRouter>
  </CartProvider>
  </div>
);

reportWebVitals();
