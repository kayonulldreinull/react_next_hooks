import React from 'react'
 
const UseState_06a = ({incrementar, decrementar, decrementar10, incrementar10}) => {
   
    return (
        <>
            <button onClick={decrementar}>- 5</button>
            <button onClick={incrementar}>+ 5</button>
            <button onClick={decrementar10}>- 10</button>
            <button onClick={incrementar10}>+ 10</button>
        </>
    )
}


export default UseState_06a;