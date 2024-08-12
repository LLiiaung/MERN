import React from 'react';
import { useDispatch } from 'react-redux';
function CompC() {
    const dispatch = useDispatch()
    function changeusername() {
        const user={
            username:'Alex',
            userid:'10',
            useremail:'abc@gmail.com'
        }
        dispatch({type:'CHANGE_USERNAME', payload:user})
    }
  return (
    <div>
      <h1>This is Component C</h1>
      <button onClick = {changeusername}>CHANGE USERNAME</button>
    </div>
    
  )
}

export default CompC;