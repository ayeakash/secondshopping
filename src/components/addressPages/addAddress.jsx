import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material';
import RadioGroup from '@mui/material';
import { Checkbox } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Link from 'antd/es/typography/Link';

const AddAddress = () => {

    const navigate = useNavigate()
    const handleClick = (path)=>{
        navigate(path)
    }

    return ( 
        <div className='page-parent'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        maxWidth: '95%',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="fullWidth" label="Full Name (required)*" variant="outlined" />
      <TextField id="outlined-basic" label="Phone Number (required)*" variant="outlined" />
      
      <Link>+ Add Alternate Phone Number</Link>
      <div className='address-grid'>
      <TextField id="outlined-basic" label="Pincode (required)*" variant="outlined" />
      <TextField id="outlined-basic" label="State (required)*" variant="outlined" />
      <TextField id="outlined-basic" label="City (required)*" variant="outlined" />
      </div>
      <TextField id="outlined-basic" label="House No., Building Name (required)*" variant="outlined" />
      <TextField id="outlined-basic" label="Road Name, Area, Colony (required)*" variant="outlined" />
      <TextField id="outlined-basic" label="Note for the Delivery Person" variant="outlined" />
      <Link>+ Add Something Else</Link>
      <p>Address Type</p>
    
      <div className='address-grid'>
      <FormControlLabel id='address-check' control={<Checkbox />} label="Home"></FormControlLabel>
      <FormControlLabel id= 'address-check' control={<Checkbox />} label="Office"></FormControlLabel>
      </div>
      <button className='btn btn-warning' onClick={()=>handleClick('/address')}>Save Address</button>
      
      
    </Box>
        
        </div>
     );
}
 
export default AddAddress;