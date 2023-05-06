import React, { Component } from 'react';
import Order from './order';

class Orders extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="main container m-2">
                     
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder='Search orders'/>
                        <div className="input-group-append">
                           <button className="btn btn-secondary" type="button" >
                           <i className="fa fa-search"></i> 
                           </button>
                        </div>
                     </div>
                  </div>
                <Order></Order>
                <Order></Order>
                
            
            </React.Fragment>

        );
    }
}
 
export default Orders;