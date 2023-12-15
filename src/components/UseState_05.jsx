import React from 'react'
import { useState } from 'react'
import UseState_05a from './UseState_05a'

export default () => {

    const [valor, setValor] = useState(0)

    function updateValor(){
        setValor(1000)
    }

    return (
    <>
        <h3>Exercicio 03</h3>
        <h3>Valor: {valor}</h3>
        <hr />
        <UseState_05a funcao={updateValor}/>

    </>
  )
}
