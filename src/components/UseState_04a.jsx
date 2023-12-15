import React, { useState } from 'react'

export default ({ unidades }) => {

const [valor1, setValor1] = useState(0)

function decremento() {
    setValor1( v => v - unidades);
}

function incremento() {
    setValor1( v => v + unidades);
}

    return (
    <>

        <button onClick={decremento}>-</button>
        <h3>Valor: <strong>{valor1}</strong></h3>
        <button onClick={incremento}>+</button>

    </>
  )
}
