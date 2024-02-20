import React, { useState } from "react";
import './UseState_11.css';

import CompA from './UseState_12_A'
import CompB from './UseState_12_B'


export default () => {
   
    const [text, setText] = useState("")
    const [nomes, setNomes] = useState([])

    function inserir() {
        setNomes(prev => [...prev, text])
        setText('')
    }

    return (
        <>
            <h3>Input Data --- collection </h3>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={inserir}>Inserir</button>
            <ul>
                {
                    nomes.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))
                        
                    
                }
            </ul>
        </>
    )
}