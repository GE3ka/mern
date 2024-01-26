import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Display from "./components/Display";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          
          <Routes>
            <Route   path="/home" element={<Home />} />
            <Route   path="/:word" element={<Display />} />
            <Route   path="/:word/:color/:bgcolor" element={<Display />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
