import React from 'react';

const TotalPopUp = (props) => {
    return ( 
        <div className='total-popup' onClick={props.closePopup}>
            <p className='center'>Price Breakdown</p>
            <div>{props.cartItems.map((item)=>(
                <div className='breakdown'>
                    <span>{item.title}:</span>
                    <span>{item.price}</span>
                    </div>
            ))}</div>

        </div>
     );
}
 
export default TotalPopUp;