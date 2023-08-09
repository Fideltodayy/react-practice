import React from 'react'
import { useState } from 'react'

function Button({onClickFunction,incrementValue}) {
    return(
        <button onClick={()=>{onClickFunction(incrementValue)}}>+1</button>
    )
}

function Dispay({message}) {
    return(
        <p>{message}</p>
    )
}

const App3 = () => {
    const [count, setCount] = useState(0);
    const incrementCounter = (incrementValue) => { 
        setCount(count+incrementValue)
    }
    return (
        <div>
            <Button onClickFunction={incrementCounter} incrementValue={1}/>
            <Button onClickFunction={incrementCounter} incrementValue={2}/>
            <Button onClickFunction={incrementCounter} incrementValue={5}/>
            <Button onClickFunction={incrementCounter} incrementValue={10}/>
            <Button onClickFunction={incrementCounter} incrementValue={100}/>
            <Dispay message={count}/>
        </div>
    )
}

export default App3
