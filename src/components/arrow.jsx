import React, { Component } from 'react';

class Arrow extends Component {
    state = {  } 
    render() { 
        return (
            <div class="fashion_section">
            <div id="main_slider" className="carousel slide" data-ride="carousel">

                  <a className="carousel-control-prev" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
               </div>
               </div>
        );
    }
}
 
export default Arrow;