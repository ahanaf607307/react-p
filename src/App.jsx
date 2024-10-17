import React from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'


function App() {
  function handleButton1(){
    alert("hi 1")
  }
  function handleButton2(){
    alert("hi 2")
  }
  return (
    <>
    <Team></Team>
    {/* <button onClick={handleButton1}>Click 1</button>
    <button onClick={handleButton2}>Click 2</button> */}
    {/* v3 */}
    <Counter></Counter>
    </>
  )
}

export default App
