import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Test() {
    const itemsobj = useSelector(store=>store.itemsReducer)
    const usersobj = useSelector(store=>store.usersReducer)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>This is test component</h1>
      <h1>The total items {itemsobj.itemslist.length}</h1>
      <h1>The total users:{usersobj.userslist.length}</h1>
      <button onClick={()=>{dispatch({type:'ADD_ITEM'})}}>ADD ITEM</button>
      <button onClick={()=>{dispatch({type:'ADD_USER'})}}>ADD USER</button>
    </div>
  )
}
