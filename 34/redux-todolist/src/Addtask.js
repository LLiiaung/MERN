import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
export default function Addtask() {
    const[taskname, settaskname]=useState('')
    const taskobj = useSelector(store => store)
    const dispatch = useDispatch()
    function addTask() {
        dispatch({type:'ADD_TASK', playload:taskname})
        console.log(taskobj)
    }
  return (
    <div>
        <div className = 'row justify-content-center'>
            <div className = 'col-md-6 p-3' style={{backgroundColor:'white', borderRadius:'10px'}}>
                <h1>Add Task</h1>
                <input type = 'text' className = 'form-control w-75' style = {{display:'inline', borderColor:'black'}}
                value = {taskname} placeholder='Tasknames' onChange={(e)=>settaskname(e.target.value)}/>
                <button className='btn btn-success m-3' onClick = {addTask} >Add Task</button>

            </div>
        </div>
    </div>
  )
}
