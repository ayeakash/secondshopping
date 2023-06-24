import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate()
    const handleNavigate = (path)=>{
        navigate(path)
    }

    return (  
    <div className='page-parent'>
    
    <button className='main-button navigate-button'>QUICK LINKS</button> 
    <button className='navigate-button' onClick={()=>handleNavigate('/new-product')}>Upload Page</button> 
    <button className='navigate-button' onClick={()=>handleNavigate('/new-product')}>Temp Page</button> 
    <button className='navigate-button' onClick={()=>handleNavigate('/')}>Home</button> 
    <button className='navigate-button' onClick={()=>handleNavigate('/address')}>Address</button> 
    <button className='navigate-button' onClick={()=>handleNavigate('/categories')}>Categories</button> 
    <button className='navigate-button' onClick={()=>handleNavigate('/login')}>Login</button> 

    </div>
    );
}
 
export default Profile;