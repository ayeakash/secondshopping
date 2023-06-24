import React, { useRef, useState } from 'react';
import Compressor from 'compressorjs';

function ImageUpload() {
  const fileInputRef = useRef(null);
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    new Compressor(file, {
      quality: 0.7,
      maxWidth: 500,
      maxHeight: 800,
      success(result) {
        // Handle the compressed image file (result) here
        uploadImage(result);
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  const uploadImage = (imageFile) => {
    // Perform the image upload to the server here
    // using XMLHttpRequest, Fetch API, or any other method
    console.log('Uploading image:', imageFile);

    // Create a temporary URL for the uploaded image
    const imageURL = URL.createObjectURL(imageFile);
    setImageURL(imageURL);
  };

  return (
    <React.Fragment>
    {imageURL && (
        <div className='up-image'>
        <img src={imageURL} alt="Uploaded" className='uploaded-image'/>
        </div>
    )}    
    <div className='upload-input'>
        <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            data-buttonText="what"
            className='grey btn btn-secondary upload-button'
            
         />
    </div>
    </React.Fragment>
  );
}

export default ImageUpload;
