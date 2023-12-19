import React, { useState } from "react";

export default () => {
   
    const [btext, setBtext] = useState('Login')
    const [login, setLogin] = useState(false)


    return (
        <>
            <h3>Conditional Rendering - Fake Login</h3>
            <hr />
            <button onClick={() => {
                setLogin(!login);
                setBtext(login ? 'Login' : 'Logout')
            }}>{btext}</button>

            {login && <p> User Conected !</p>}
        </>
    )
}