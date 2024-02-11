import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthorForm from "../components/AuthorForm";
const Create = (props) => {
    const nav = useNavigate()
    
  
    const createAuthor = (author) => {
        const newAuthor= author;
            axios.post("http://localhost:5000/api/authors",newAuthor)
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav("/")
            })
            .catch((err) => console.log(err));
        };


    return (
        <div>
            <AuthorForm authorDetails={{ name: "" }} submitDetails={createAuthor} submitValue="Create"/>     
        </div>
    )
}

export default Create