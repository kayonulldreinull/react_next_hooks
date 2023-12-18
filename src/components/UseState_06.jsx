import React from 'react'
import { useState } from 'react'
import UseState_06a from './UseState_06a'

export default () => {

    const [valor, setValor] = useState(0);

    /*
     Aqui, como melhora eu troquei as 4 functions por 4 const
     deixando meu codigo mais legivel 
    */

    const decrementar = () => setValor(v => v - 5);
    const incrementar = () => setValor(v => v + 5);
    const decrementar10 = () => setValor(v => v - 10);
    const incrementar10 = () => setValor(v => v + 10);

    return (
    <>
        <h3>Exercicio 04</h3>
        <h3>Valor: {valor}</h3>
        <hr />
        <UseState_06a
         decrementar={decrementar}
         incrementar={incrementar}
         decrementar10={decrementar10}
         incrementar10={incrementar10}
         />

    </>
    );
};
