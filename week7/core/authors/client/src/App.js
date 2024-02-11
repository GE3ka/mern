
import Main from './components/Main';
import Update from'./components/Update';
import OneAuthor from './components/OneAuthor';
import Create from './components/Create';
import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
        <div>
          <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand ><Link to="/" style={{ color:"aliceblue" , textDecoration: 'none'}}><h3>Favorite Authors</h3></Link></Navbar.Brand>
              </Container>
          </Navbar>
        </div> 
          <br/> <br/> 
          <Routes >

              
              <Route path="/" element={<Main/>} />            
              <Route path="/authors/:id" element={<OneAuthor/>} />
              <Route path="/authors/create" element={<Create />} />
              <Route path="/authors/:id/edit" element={<Update />} />
          </Routes>
            
          
    </div>
  );
}

export default App;
