import React from 'react'
import { useState } from 'react';
export default function Home() {
    const [color, setcolor] = useState("red");
    const [bgcolor, setbgcolor] = useState("yellow");
    function changestyling() {
        setcolor("blue")
        setbgcolor("green")
    }
  return (
    <div>
        <h1>Manipulating CSS using Hooks</h1>
        <h1 style = {{color:color}}>Ronaldo</h1>
        <h1 style = {{backgroundColor:bgcolor}}>Football</h1>
        <button onClick = {changestyling}>Change styling</button>
    </div>
  )
}
