import React from 'react';

import ProductCard from '../subComponents/productCard';
import { combos } from '../../data/raybaProductList';

const CombosPage = () => {
    return ( 
        <div className='page-parent align-parent'>
            {combos.map((combo)=>(
                <div className='align-child' key={combo.id}>
                <ProductCard data={combo} ></ProductCard>
                </div>
                
            ))}
        </div>
     );
}
 
export default CombosPage;