import React, { useState } from "react";
import './UseState_11.css';

import CompA from './UseState_12_A'
import CompB from './UseState_12_B'


export default () => {
   
    const [state, setState] = useState(true)


    return (
        <>
            <h3>Conditional Rendering - Alternate Between Components</h3>
            <button onClick={() => setState(!state)}>Alternate Components</button>
           
            { state ? <CompA /> : <CompB /> }
            
        </>
    )
}