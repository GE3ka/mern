
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'
import ShowBoxes from './components/showBoxes';

function App() {
  const [ boxes, setBoxes ] = useState([]);


  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxes={ boxes } setBoxes={ setBoxes } />
      <ShowBoxes boxes={ boxes } />
      
     
    </div>
  );
}

export default App;
