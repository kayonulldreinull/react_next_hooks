import React, { useRef } from "react";

export default () => {
   
    const valor = useRef(null)

    function incremento() {
        valor.current = valor.current + 1
    }

    console.log('Componente renderizado!')
  
    return (
        <>
            <h3>React Hooks - UseRef</h3>
            <p>Valor: {valor.current}</p>
            <button onClick={incremento}>Incremento</button>
        </>
    )
}