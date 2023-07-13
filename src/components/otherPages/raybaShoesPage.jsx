import React from 'react';

import ProductCard from '../subComponents/productCard';
import { shoes } from '../../data/raybaProductList';

const ShoesPage = () => {
    return ( 
        <div className='page-parent align-parent'>
            {shoes.map((shoe)=>(
                <div className='align-child'  key={shoe.id}>
                <ProductCard data={shoe}></ProductCard>
                </div>
                
            ))}
        </div>
     );
}
 
export default ShoesPage;