import React, { Component } from 'react';
import banner from '../../images/banner.png';
import banner2 from '../../images/banner2.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

class ImageSlider extends Component {
    state = {  } 
    render() { 

      const slideImages = [
        banner, banner2
      ]
        
    return (
    <React.Fragment>
      <div className="slideshow-container">
    <Slide>
          {slideImages.map((image, index) => (
            <div className="each-slide" key={index}>
              <div style={{ backgroundImage: `url(${image})` }}>
              </div>
            </div>
           ))}
    </Slide>
    </div>

<h1>This is it</h1>

            {/* <div className="slideshow-container">
                
              <div className="mySlides">
                <div className="numbertext">1 / 3</div>
                <img src={banner} alt='slide one' align="center"/>
                <div className="text">Caption Text</div>
              </div>
            
              <div className="mySlides">
                <div className="numbertext">2 / 3</div>
                <img src={banner2} alt='slide 2'/>
                <div className="text">Caption Two</div>
              </div>
            
              <div className="mySlides">
                <div className="numbertext">3 / 3</div>
                <img src="img3.jpg" alt='slide 3'/>
                <div className="text">Caption Three</div>
              </div>
            
              
              <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a className="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br/>
            
            
            <div > */}
              {/* <span className="dot" onclick="currentSlide(1)"></span>
              <span className="dot" onclick="currentSlide(2)"></span>
              <span className="dot" onclick="currentSlide(3)"></span> */}
            {/* </div>  */}
            </React.Fragment>
        );
    }
}
 
export default ImageSlider;