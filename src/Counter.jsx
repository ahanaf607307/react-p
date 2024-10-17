import { useState } from "react"

export default function Counter() {
    const [count , setCount] = useState(0)
    const addCount = () => {
        const newCount = count + 5;
        setCount(newCount)
    }
   
return (
    <>
    <h3>Counter :{ count} </h3>
    <button onClick={addCount}>Add</button>
    </>
)
}