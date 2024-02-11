import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

const OneAuthor = () => {

    const [author, setAuthor] = useState(null)
    
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:5000/api/authors/" + id)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[id])
    


  return (
      <div>
          {
              author ? (
                    <> 
                        <Card  style = {{width:'300px',margin:'20px'}}>
                            <Card.Header>Selected Author</Card.Header>
                            <Card.Body>
                                <Card.Title> {author.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </>
              ):<h3>Loading ...</h3>
          }
          
          </div>
  )
}

export default OneAuthor