import React, { Component } from 'react';

class PriceDetails extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h2>Price details</h2>
                <table>
                <tr>
                    <td>Price (3 items)</td>
                    <td>$7,098</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>-$3,910</td>
                </tr>
                <tr>
                    <td>Delivery charges</td>
                    <td>FREE delivery</td>
                </tr>
                <tr>
                    <td>Total Amount</td>    
                    <td>$2,919</td>
                </tr>

                </table>


            </div>
        );
    }
}
 
export default PriceDetails
