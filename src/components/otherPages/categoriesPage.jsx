import React from 'react';
import Category from '../subComponents/category';

// import {shirts, pants, shoes} from '../../data/productCardObject'

import { shirts, combos, shoes } from '../../data/raybaProductCardObject';


import { useNavigate } from 'react-router-dom';

export default function Categories(){
        
        const navigate = useNavigate();
        const handleClick = (path) =>{
        navigate(path)
      }

        return (
            
            <div className='categories-page'>
                <div className="bar m-2">Shirts</div>
                <div className="row-one" onClick={()=>handleClick('/shirts')}  >
                

                <div className='grid-first-child' >
                <Category title="Printed" image={shirts[1]['image']}/>
                </div>
                <div className="grid-first-child">
                <Category title="T-Shirts" image={shirts[2]['image']}/>
                </div>
                <div className="grid-first-child">
                <Category title="Casual" image={shirts[3]['image']}/>
                </div>
                <div className="grid-first-child">
                <Category title="Suits" image={shirts[4]['image']}/>
                </div>
                </div>


                <div className="bar "><p className='center'>Pants</p></div>

                <div className="row-one" onClick={()=>handleClick('/combos')} >
                <div className='grid-first-child'>
                <Category title="Formal" image={combos[1]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Professional" image={combos[2]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Jeans" image={combos[3]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Casual" image={combos[4]['image']}/>
                </div>
                </div>


                <div className="bar "><p className='center'>Shoes</p></div>

                <div className="row-one" onClick={()=>handleClick('/shoes')} >
                <div className='grid-first-child'>
                <Category title="Beach" image={shoes[1]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Running" image={shoes[2]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Sneakers" image={shoes[7]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Chappal" image={shoes[5]['image']}/>
                </div>
                </div>



            </div>
        );
    }
