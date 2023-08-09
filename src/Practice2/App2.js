import React from 'react'
import { useState } from 'react'

function Button({onClickFunction}) {
    return(
        <button onClick={onClickFunction}>+1</button>
    )
}

function Dispay({message}) {
    return(
        <p>{message}</p>
    )
}

const App2 = () => {
    const [count, setCount] = useState(0);
    const incrementCounter = () => { 
        setCount(count+1)
    }
    return (
        <div>
            <Button onClickFunction={incrementCounter}/>
            <Dispay message={count}/>
        </div>
    )
}

export default App2
