import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 


class NavBar extends Component{
   
    render() { 
        return ( 
                <div className="header_section">
               <div className="containt_main">
                  
               <Link to='/login'>
                             
                              <span className="padding_10">LOGIN
                              
                              </span></Link>
                           

                  <div className="main">
                     
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder="Find your attire"/>
                        <div className="input-group-append">
                           <button className="btn btn-secondary" type="button" >
                            
                           <i className="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div>
                     
                    
                  </div>
                  <div className="header_box">
                     <div className="login_menu">
                        <ul> 
                           <li><Link to='/categories'>
                              
                              <span className="padding_10">Categories</span></Link>
                           </li>
                           <li><Link to='/cart'>
                             
                              <span className="padding_10">Cart</span></Link>
                           </li>
                           <li><Link to='/orders'>
                             
                              <span className="padding_10">Orders</span></Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         );
    }
}
 
export default NavBar;