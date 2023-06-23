import React from 'react';

import ProductCard from '../subComponents/productCard';
import { pants,} from '../../data/productCardList'

const PantsPage = () => {
    return ( 
        <div className='page-parent align-parent'>
            {pants.map((pant)=>(
                <div className='align-child' key={pant.id}>
                <ProductCard data={pant} ></ProductCard>
                </div>
                
            ))}
        </div>
     );
}
 
export default PantsPage;