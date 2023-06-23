import React from 'react';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SideBar from '../subComponents/sideBar';
import logo from '../../data/images/logo.svg'
import SearchLogic from './searchLogic';


const PrimarySearchAppBar = () => {
  
  const navigate = useNavigate();
  const handleClick = (path) =>{
      
      navigate(path)
    }
  
    return ( 
    <div>
        <div className='nav-bar'>
        <div >
        <img src={logo} alt="logo" className='image-logo' onClick={()=>handleClick('/')}/>
        <div className='search-icon'>
        <Search/>
        </div>
        </div>
        <SearchLogic></SearchLogic>
        <div className='account-icon'>
        <SideBar/>
        </div>
        </div>
    </div>
     );
}
 
export default PrimarySearchAppBar;