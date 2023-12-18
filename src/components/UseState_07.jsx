import React from 'react'
import { useState } from 'react'
import UseState_07a from './UseState_07a'

export default () => {

    const [valor, setValor] = useState([0,0,0]);

    function update(indice, unidade) {
        const tmp = [...valor]
        tmp[indice] = tmp[indice] + unidade
        setValor(tmp)
}

const decValor1 = () => { update(0, -1) }
const incValor1 = () => { update(0, 1) }

const decValor2 = () => { update(1, -1) }
const incValor2 = () => { update(1, 1) }

const decValor3 = () => { update(2, -1) }
const incValor3 = () => { update(2, 1) }


    return (
    <>
        <h3>Exercicio 05</h3>
        <ul>
            <li>
                {valor[0]}
            </li>
            <li>
                {valor[1]}
            </li>
            <li>
                {valor[2]}
            </li>
        </ul>
        
        <hr />
        <UseState_07a funcDec={decValor1} funcInc={incValor1}/>
        <hr />
        <UseState_07a funcDec={decValor2} funcInc={incValor2} />
        <hr />
        <UseState_07a funcDec={decValor3} funcInc={incValor3} />

    </>
    );
};
