import React from 'react';

import ProductCard from '../subComponents/productCard';
import {shirts} from '../../data/productCardList'

const ShirtsPage = () => {
    return ( 
        <div className='page-parent align-parent'>
            {shirts.map((shirt)=>(
                <div className='align-child' key={shirt.id}>
                <ProductCard data={shirt} ></ProductCard>
                </div>
                
            ))}
        </div>
     );
}
 
export default ShirtsPage;