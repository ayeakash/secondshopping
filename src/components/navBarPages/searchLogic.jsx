import productCardObject from "../../data/productCardList";
import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

import { CartContext } from "../experiments/cartContext";

const SearchLogic = () => {

    // const [ shirts, setShirts] = useState([])
    const {inputValue, setInputValue} = useContext(CartContext)

    const navigate = useNavigate();
    const handleClick = (path) =>{
      
      navigate(path)
    }

    // useEffect(()=>{
    //     setShirts(productCardObject.shirts)
    // },[])

    // const options = {
    //     includeScore: true,
    //     keys: ['title', 'description']
    // }
    // const fuse = new Fuse(shirts, options)

    const handleInputValue = e =>{
        e.preventDefault()
        setInputValue(e.target.value)
        // const result = fuse.search(inputValue)
        // console.log('Inputvalue', e.target.value)
        // console.log('Search Result', result)
    }
    

    return (  
        <React.Fragment>
            <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputValue} 
            onClick={()=>handleClick('/search')} 
            placeholder='Search...' 
            className='search-input'/>
        </React.Fragment>
    );
}
 
export default SearchLogic;