import React, {useState, useEffect} from 'react'

export default () => {

    const [valor, setValor] = useState(0)
    const [nome, setNome] = useState()

    function incremento() {
        setValor(valor + 1)
    }

    function definirNome() {
        setNome('Kayo Barreto')
    }

useEffect(() => {
    console.log('Executar apenas no inicio do componente')
}, [])

useEffect(() => {
    console.log('Executar apenas na alteracao do Valor')
}, [valor])

useEffect(() => {
    console.log('Executar apenas na alteracao do Nome')
}, [nome])

    return (
        <>
                <h3>UseEffect 01</h3>
                <button onClick={incremento}>Incremento</button>
                <h3>{valor}</h3>
                <button onClick={definirNome}>Definir Nome</button>
                <h3>{nome}</h3>
        </>
    )
}