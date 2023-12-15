import React from 'react'
import './styles.css';
import UseState_04a from './UseState_04a';

export default () => {

    return (
    <>
     <h4>Contador</h4>
     <div className="layout">
        <UseState_04a unidades={1} />
        <UseState_04a unidades={5} />
        <UseState_04a unidades={10} />
        </div>     
    </>
  )
}

