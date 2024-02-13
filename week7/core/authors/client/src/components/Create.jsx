import axios from 'axios'
import React, { useState } from 'react'

import {useNavigate } from 'react-router-dom'
import AuthorForm from "../components/AuthorForm";

const Create = (props) => {
    const nav = useNavigate()
    const [errors, setErrors] = useState([]); 
  
    const createAuthor = (author) => {
        const newAuthor= author;
            axios.post("http://localhost:5000/api/authors",newAuthor)
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav("/")
            })
            .catch((err) =>{
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
        <div>
            <AuthorForm authorDetails={{ name: "" }} submitDetails={createAuthor} submitValue="Create" errors={[errors]}/>     
        </div>
    )
}

export default Create