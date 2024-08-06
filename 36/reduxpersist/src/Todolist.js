import React from 'react'
import { useSelector } from 'react-redux'
export default function Todolist() {
    const taskobj = useSelector(store => store.taskReducer)
    const tasklist = taskobj.tasklist.map((task)=>{
        return (
            <h1>{task}</h1>

        )
        
    })
  return (
    <div>
      <h1>This is to do list component</h1>
      {tasklist}
    </div>
  )
}
