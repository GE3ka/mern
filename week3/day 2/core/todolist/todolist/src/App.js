
import './App.css';
import Display from './components/Display'
import Form from './components/Form'
import { useState } from 'react'
function App() {
  const [allTasks, setAlltasks] = useState([])
 
  return (
    <div className="App"> 
     <Form allTasks={allTasks} setAlltasks={setAlltasks} />
     
     <Display allTasks={allTasks} setAlltasks = {setAlltasks} /> 
    </div>
  );
}

export default App;
