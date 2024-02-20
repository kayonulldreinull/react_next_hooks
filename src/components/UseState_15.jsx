import React, { useState } from "react";

export default () => {
   
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    };

    console.log("Component Rendered")

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}