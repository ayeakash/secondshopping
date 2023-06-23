import * as React from 'react';

import { Link } from 'react-router-dom';


export default function AddressCard(props) {

  return (
    <div className='address-card'>
    <div className='heading-4'>
    {props.data.fullName.toUpperCase()}
    </div>
    <div>
    {`${props.data.house}, ${props.data.building}`}
    <br />
    {`${props.data.city}, ${props.data.state}, ${props.data.pincode}`}
    </div>
    <div>
    {`Landmark: ${props.data.landmark}`}
    </div>
    <button className='edit-button' onClick={props.onEdit}>Edit</button>
    </div>
  );
}