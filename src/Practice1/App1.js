import React from 'react'
import { useState } from 'react'
const App1 = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={()=> {setCount(count+1)}}>{count}</button>
    )
}

export default App1