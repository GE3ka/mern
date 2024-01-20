import React from 'react'

const Display = (props) => {
    const {allTasks , setAlltasks}=props;
    const taskDone = (theTask) => {

        let updateTasks = allTasks.map((aTask) => {
            if (aTask === theTask) {
            let newTask = { ...aTask}
            newTask.done = !newTask.done;
            return newTask;
            console.log(newTask);
          }
          else {
            return aTask;
            console.log(aTask);
          }
        })
        setAlltasks(updateTasks);
      }
  return (
        <fieldset>
            <legend>Display </legend>
            {
             
            props.allTasks.map((oneTask, i) => {
                return <div key={i}>
                    
                    { oneTask.taskStatus ? <h3 className={"done"} >{oneTask.task}</h3>:<h3>{oneTask.task}</h3>}
                    <input  type='checkbox' onChange={() => taskDone(oneTask)}/>
                    </div>
                })
            }
            
             

        </fieldset>
    )
}

export default Display