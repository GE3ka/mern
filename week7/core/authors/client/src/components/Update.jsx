import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthorForm from './AuthorForm'
const Update = () => {
    
    const [author, setAuthor] = useState({
        name: "",
         
      });
    
    const { id } = useParams()
    const nav = useNavigate()
    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/authors/${id}`)
          .then((res) => {
            console.log("update ",res.data)
            setAuthor(res.data);
          })
          .catch((err) => console.log(err));
      }, [id]);
    
      const updateAuthor= (author) => {
        axios
            .patch(`http://localhost:5000/api/authors/${id}`, author)
            .then((res) => {
                nav("/") 
            })
            .catch((err) => console.log(err));
      };
    
      return (
        <AuthorForm  authorDetails={author}  submitDetails={updateAuthor} submitValue="Update" />
      );
    };
    

export default Update