import React, { useState } from "react";
import './UseState_11.css';

import CompA from './UseState_12_A'
import CompB from './UseState_12_B'


export default () => {
   
    const [text, setText] = useState("")



    return (
        <>
            <h3>Text Input</h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
            <h4>{text}</h4>
            <p>O texto inserido e {text}</p>
            
        </>
    )
}