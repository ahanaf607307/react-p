import React from 'react'
import './App.css'

function App() {
  function handleButton1(){
    alert("hi 1")
  }
  function handleButton2(){
    alert("hi 2")
  }
  return (
    <>
    <button onClick={handleButton1}>Click 1</button>
    <button onClick={handleButton2}>Click 2</button>
    </>
  )
}

export default App
