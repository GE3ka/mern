import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AuthorForm = (props) => {
    const [author, setAuthor] = useState(props.authorDetails);
    const errors = props.errors;
    useEffect(() => setAuthor(props.authorDetails), [props.authorDetails]);
     
    const handleSubmit = (e) => {
    e.preventDefault();
        
    props.submitDetails(author);     
  };

    return (
        <> 
            <div style={{width :'500px'}}>
                <Form onSubmit={(e) => handleSubmit(e)} > 
                    <Form.Label htmlFor="inputName"><h4>Name of the Author</h4></Form.Label>
                    <Form.Control  
                    placeholder="Author's name goes here"
                    name ="name" 
                    value={author.name}  
                    onChange ={(e)=>{ setAuthor({ ...author, [e.target.name]: e.target.value })} }           
                    />
                     {errors.map((err, index) => (                        
                            <Form.Text  key={index}  muted>{err} </Form.Text>
                                          
                     ))}
                    
                    <br/><br/>
                    <div  className="d-grid gap-2">
                        <Button type="submit"   variant="secondary" size="lg">{props.submitValue}  </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AuthorForm;