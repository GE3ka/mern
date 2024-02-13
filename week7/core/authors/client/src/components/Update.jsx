import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthorForm from './AuthorForm'
const Update = () => {
  const [errors, setErrors] = useState([]); 
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
            .catch((err) => {
              console.log(err.response.data.errors)
              const errorResponse = err.response.data.errors; // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)
              }
              // Set Errors
              setErrors(errorArr);
          });
      };

      
    
      return (
        <AuthorForm  authorDetails={author}  submitDetails={updateAuthor} submitValue="Update" errors={[errors]} />
      );
    };
    
  
export default Update