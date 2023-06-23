import React, {useState, useEffect, useContext} from 'react';
import ProductCard from '../subComponents/productCard';
import { CartContext } from '../experiments/cartContext';
import Fuse from 'fuse.js';
import productCardObject from '../../data/productCardList';
import { Link } from 'react-router-dom';

const SearchPage = () => {

    const [ shirts, setShirts] = useState([])
    const {inputValue} = useContext(CartContext)

    useEffect(()=>{
        setShirts([...productCardObject.shirts, ...productCardObject.pants, ...productCardObject.shoes ])
    },[])

    const options = {   
        includeScore: true,
        keys: ['title'],
        threshold: 0.3,
        
    }
    const fuse = new Fuse(shirts, options)
    const result = fuse.search(inputValue)
    // console.log(result)

    return ( 
        <div className='page-parent '>
            {inputValue ?<p>Showing you results for <strong>{inputValue}</strong></p>: 
            <p>Please Search Something or go to <Link to={'/'}>home</Link> </p>}
            <div className='align-parent'>
            {result.map(shirt => 
            <div className='align-child' key={shirt.item.id}>
            <ProductCard data={shirt.item} ></ProductCard>
            </div>)}
            </div>
        </div>
     );
}
 
export default SearchPage;