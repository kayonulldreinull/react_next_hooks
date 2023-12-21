import React, { useState } from "react";
import './styles.css';

export default () => {
   
    const [state, setState] = useState(true)

    const class1 = "classUm"
    const class2 = "classDois"

    return (
        <>
            <h3>Conditional Rendering - Change Class CSS</h3>
            <button onClick={() => setState(!state)}>Alterar Background</button>
           
           <p className={`paragrafo ${state ? class1 : class2}`}>Um texto para alterar a cor de fundo</p>
            
        </>
    )
}