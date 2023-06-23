import React, { Component } from 'react';
import banner from '../images/banner.png'
import banner2 from '../images/banner2.png'

class Banner extends Component {
    state = {  } 
    
    render(    ) { 
        return (
         <div className="App container m-3" src={banner} />
        );
    }
}
 
export default Banner;