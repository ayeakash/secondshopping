import React from 'react';
import { TextField } from '@mui/material';
import ImageUpload from '../uploadPages/imageUpload';

const UploadMainPage = () => {
    return ( 
        <div className="upload-page-parent">
            <input type="text" className='upload-text-input' placeholder='Brand'/>
            <input type="text" className='upload-text-input' placeholder='Product Name'/>
            <textarea rows={1} type='input' className='upload-text-input text-field' placeholder='Description'/>
            <input type="text" className='upload-text-input half' placeholder='MRP'/>
            <input type="text" className='upload-text-input half' placeholder='Price'/>
            <input type="text" className='upload-text-input half' placeholder='Available Colors'/>
            <input type="text" className='upload-text-input half' placeholder='Available Sizes'/>
            <ImageUpload></ImageUpload>
        </div>
     );
}
 
export default UploadMainPage;