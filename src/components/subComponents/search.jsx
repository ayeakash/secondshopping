import Fuse from 'fuse.js'
import React from 'react';

import productCardObject from '../../data/productCardObject';
import productCardObject from '../../data/productCardObject';

const Search = () => {
    const fuse = new Fuse(productCardObject, {
        // keys: [productCardObject.pants[]]
    })
    return ( null);
}
 
export default Search;