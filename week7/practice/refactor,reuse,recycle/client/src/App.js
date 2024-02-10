import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Display from './components/Display';
import OneProduct from './components/OneProduct';
import Edit from './components/Edit'
function App() {
  return (
    <div className="App">
      <h3>Product Manager</h3>
      <Link to="/">Home</Link> 
      <br/>
      <Link to="/products/create"> Add a product</Link>
      <hr/>
      <Routes >
        <Route path="/" element={<Display />} />
        <Route path="/products/create" element={<Create />} />
        <Route path="/products/:id" element={<OneProduct />} />
        <Route path="/products/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
