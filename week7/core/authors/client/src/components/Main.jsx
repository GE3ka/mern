import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Main = () => {

    const [authors, setAuthors] = useState([])
                                 
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/authors")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch((err) => {
            console.log(err)
        })
        
    },[])
    const deleteMe = (deleteId) => {
        axios.delete("http://localhost:5000/api/authors/" + deleteId)
            .then(res => {
        //----------------
            console.log("OK this author has been Deleted ☠️" , res.data)
            const filteredAuthors = authors.filter((eachAuthor) => {
                    return eachAuthor._id !== deleteId
            })
            setAuthors(filteredAuthors)
            })
        //----------------
            .catch(err => {
                console.log(err)
            })
        
    }
  return (
      <div className="col-md-7 mx-auto">
        <Container fluid="md"   >
                    <Row>
                        <Col className="d-grid gap-2"><h3  style={{ color:"teal "}}>We have quotes by: </h3></Col>
                        <Col className="d-grid gap-2">
                            <h3>
                                <Link to={"/authors/new"} style={{ color:"teal " , textDecoration: 'none'}}> Add a new author</Link>
                            </h3>
                        </Col>
                    </Row>
        </Container>
      <hr/>
          
      <Table striped hover borderless >
        <thead>
            <tr>
                <th>Authors</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          { 
            
                authors.map((oneAuthor, index) => {
                  return (
                    
                    <tr>
                        <td key={oneAuthor._id}>
                        <Link to={"/authors/" + oneAuthor._id}  style={{ color:"slategray",fontWeight:'bold' , textDecoration: 'none'}}>
                            {oneAuthor.name}
                        </Link>
                        </td>
                        <td  key={index}>
                        
                        <Container fluid="md"   >
                            <Row>
                                <Col className="d-grid gap-2">
                                    <Button variant="secondary">
                                        <Link to={`/authors/${oneAuthor._id}/edit`} style={{ color:"white",textDecoration: 'none'}}>Edit</Link> 
                                    </Button>
                                </Col>
                                <Col className="d-grid gap-2"> <Button onClick={() => { deleteMe(oneAuthor._id) }} variant="dark">Delete</Button></Col>
                            </Row>
                        </Container>
                            
                            
                        </td>
                      </tr>
                    
                  )
              })
             
          }
          </tbody>
        </Table>


    </div>
  )
}

export default Main