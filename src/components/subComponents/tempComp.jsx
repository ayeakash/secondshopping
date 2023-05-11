import React, { Component } from 'react';
import MultiActionAreaCard from '../product';

class TempComp extends Component {
    state = {  } 
    render() { 
        return (
            <div >
                <MultiActionAreaCard></MultiActionAreaCard>
                <MultiActionAreaCard></MultiActionAreaCard>
            </div>
        );
    }
}
 
export default TempComp;