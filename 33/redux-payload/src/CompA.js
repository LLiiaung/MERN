import React from 'react';
import { useSelector } from 'react-redux';

function CompA() {
  const gamesobj = useSelector(state => state)
  return (
    <div className = 'ca'>
      <h1>This is component A</h1>
      <h1>The given game name in gamesReducer is {gamesobj.gamename}</h1>
      <h1>The given player name is {gamesobj.playername}</h1>
      <h1>The given username is {gamesobj.username}</h1>
    </div>
    
  )
}

export default CompA;