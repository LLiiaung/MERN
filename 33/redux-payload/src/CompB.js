import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function CompB() {
  const [gamename, setgamename] = useState('')
  const [playername, setplayername] = useState('')
  const dispatch = useDispatch();
  function changegamename() {
    dispatch({type: 'CHANGE_GAME_NAME', payload:gamename})

  }
  function changeplayername() {
    dispatch({type: 'CHANGE_PLAYER_NAME', payload:playername})

  }
  return (

    <div className="cb">
      <h1>This is component B</h1>
      <input type="text" placeholder="new game" value={gamename} onChange={(e)=>{setgamename(e.target.value)}}/>
      <button onClick={changegamename}>CHANGE GAME NAME</button>

      <br/>
      <input type="text" placeholder="new player" value={playername} onChange={(e)=>{setplayername(e.target.value)}}/>
      <button onClick={changeplayername}>CHANGE PLAYER NAME</button>
    </div>

  )
}

export default CompB;