import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner from '../../images/banner.png';
import banner2 from '../../images/banner2.png';
import image3 from '../../images/banner-bg.png'



class Carousel extends Component {
    state = {  } 
    render() { 
        const handleDragStart = (e) => e.preventDefault();
        const items = [
            <img src={banner} onDragStart={handleDragStart} role="presentation" />,
            <img src={banner2} onDragStart={handleDragStart} role="presentation" />,
            <img src= {image3} onDragStart={handleDragStart} role="presentation" />,
          ];
          


        return (

            <AliceCarousel mouseTracking items={items} infinite={true} keyboardNavigation={true} disableButtonsControls={true}/>
        );
    }
}
 
export default Carousel;