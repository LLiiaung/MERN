
import React from 'react'
import { useState } from 'react';
export default function UseState() {
    const [player, setplayer] = useState("Sachin");
    const [numbers, setnumbers] = useState([1, 3, 5, 7, 9]);
    function changplayer() {
      setplayer("Dhoni");
      setnumbers([2, 4, 6, 8, 10]);
    }
  return (
    <div>
      <h1>The declared player is {player}</h1>
      <h1>The declared numbers are {numbers}</h1>
      <button onClick={changplayer}>Change player and numbers</button>
    </div>
  )
}
