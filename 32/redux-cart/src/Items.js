import React from 'react';
import { useDispatch } from 'react-redux';

function Items() {
  const dispatch =useDispatch()

  function additem() {
    dispatch({type: 'ADD_ITEM'})
  }

  function removeitem() {
    dispatch({type: 'REMOVE_ITEM'})
  }


  return (
    <div>
      <h1>This is Items Component</h1>
      <button onClick={additem}>ADD ITEM</button>
      <button onClick={removeitem}>REMOVE ITEM</button>

    </div>
  )
}

export default Items