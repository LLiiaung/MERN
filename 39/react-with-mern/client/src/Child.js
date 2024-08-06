import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getMessages} from './messageAction'
import {addnewmessage} from './messageAction'
export default function Child() {
    const dispatch = useDispatch()
    const messagesdata = useSelector(state=>state)
    const messages = messagesdata.messages
    const [input, setinput] = useState('')
    function getMessageFromBackend() {
        dispatch(getMessages())
        console.log(messages)
    }
    function addnewmessagetonode(){
      dispatch(addnewmessage(input))
    }
    const messageslist = messages.map(
        message=>{
            return <h1>{message}</h1>
        }
    )
  return (
    <div>
      <button onClick={getMessageFromBackend}>get message from backend</button>
      {messageslist}
      <br/>
      <input type = 'text' placeholder='message' onChange={(e)=>{setinput(e.target.value)}}/>
      <br/>
      <button onClick={addnewmessagetonode}>Add New Messages</button>
    </div>
  )
}
