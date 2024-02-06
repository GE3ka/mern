import './App.css';
import {useState} from 'react';
import Tabs from './components/Tabs'
function App() {
  const [tabs,setTabs] = useState([
    {label:"Tab 1",content:"Tab 1 content"},
    {label :"Tab 2",content:"Tab 2 content"},
    {label:"Tab 3",content:"Tab 3 content"},
    {label:"Tab 4",content:"Tab 4 content"}
  ])
  return (
    <div className="App">
      <Tabs tabs = {tabs} setTabs={setTabs}/>
    </div>
  );
}

export default App;
