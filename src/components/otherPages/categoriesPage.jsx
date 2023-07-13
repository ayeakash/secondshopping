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
                <Category title="Formal" image={shirts[1]['image']}/>
                </div>
                <div className="grid-first-child">
                <Category title="Casual" image={shirts[2]['image']}/>
                </div>
                <div className="grid-first-child">
                <Category title="Printed" image={shirts[3]['image']}/>
                </div>
                <div className="grid-first-child">
                <Category title="Raincoats" image={shirts[4]['image']}/>
                </div>
                </div>


                <div className="bar "><p className='center'>Combos</p></div>

                <div className="row-one" onClick={()=>handleClick('/combos')} >
                <div className='grid-first-child'>
                <Category title="Stripped" image={combos[1]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Formal" image={combos[2]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Casual" image={combos[3]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Checks" image={combos[4]['image']}/>
                </div>
                </div>


                <div className="bar "><p className='center'>Shoes</p></div>

                <div className="row-one" onClick={()=>handleClick('/shoes')} >
                <div className='grid-first-child'>
                <Category title="Chappal" image={shoes[1]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Kolhapuri" image={shoes[2]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Sports" image={shoes[7]['image']}/>
                </div>
                <div className='grid-first-child'>
                <Category title="Mojadi" image={shoes[5]['image']}/>
                </div>
                </div>



            </div>
        );
    }
