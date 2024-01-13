import Person from './components/Person'

import './App.css';

function App() {
  return (
    <div className="App">
      <Person fullName = {"Doe Jane"} initialAge = {45} hairColor={"Black"}/>
      <Person fullName = {"Smith John"} initialAge = {88} hairColor={"Brown"}/>
      <Person fullName = {"Fillmore Millard"} initialAge = {50} hairColor={"Brown"}/>
      <Person fullName = {"Smith Maria"} initialAge = {62  } hairColor={"Black"}/>
    </div>
  );
}

export default App;
