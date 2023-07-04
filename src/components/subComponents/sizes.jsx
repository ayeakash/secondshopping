import React, { useState } from 'react';

const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className='product-size'>
      <div
        className={`size-button ${selectedSize === 'XS' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('XS')}
      >
        XS
      </div>
      <div
        className={`size-button ${selectedSize === 'S' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('S')}
      >
        S
      </div>
      <div
        className={`size-button ${selectedSize === 'M' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('M')}
      >
        M
      </div>
      <div
        className={`size-button ${selectedSize === 'L' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('L')}
      >
        L
      </div>
      <div
        className={`size-button ${selectedSize === 'XL' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('XL')}
      >
        XL
      </div>
      <div
        className={`size-button ${selectedSize === 'XXL' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('XXL')}
      >
        XXL
      </div>
      <div
        className={`size-button ${selectedSize === 'XXXL' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('XXXL')}
      >
        XXXL
      </div>
    </div>
  );
};

export default Sizes;
