import React, { useState } from 'react'
const Form = (props) => {
    const[task,setTask]=useState({
        task:"",
        taskStatus:true
      });
    const {allTasks , setAlltasks}=props;
    const createTask=(e)=>{
        e.preventDefault()
        const newTask = {
            task : task,
            taskStatus:false
        }
        setAlltasks([...allTasks,newTask])
    }
return(
    <fieldset>
            <form onSubmit={createTask} >
                    <div>
                        Add a task
                        <input  onChange={(e)=>{setTask(e.target.value)} } value={task.task}/>
                    </div>
                    <button type='submit'>Add</button>

            </form>
    </fieldset>    

)
}
export default Form