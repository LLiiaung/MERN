import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
export default function Addtask() {
    const[taskname, settaskname]=useState('')
    // const taskobj = useSelector(store => store)
    const dispatch = useDispatch()
    function addTask() {
        dispatch({type:'ADD_TASK', payload:taskname})
        // console.log(taskobj)
    }
  return (
    <div>
        <div >
            <div>
                <h1>Add Task</h1>
                <input type = 'text' value = {taskname} placeholder='Taskname' onChange={(e)=>settaskname(e.target.value)}/>
                <button onClick = {addTask} >Add Task</button>

            </div>
        </div>
    </div>
  )
}
