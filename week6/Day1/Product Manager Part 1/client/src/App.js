import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Display from './components/Display'
function App() {
  return (
    <div className="App">
      <Link to="/products/create"> Add a product</Link>
      <Routes >
        <Route path="/products/create" element={<Create />} />
        <Route path="/" element={<Display />} />
      </Routes>


    </div>
  );
}

export default App;
