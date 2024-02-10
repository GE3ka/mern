import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'
import DeleteButton from "./DeleteButton";
const Display = () => {

    const [products, setProducts] = useState([])
    const nav = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:5000/api/products/")
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err) => {
            console.log(err)
        })
        
    },[])
                                    
    
    return (
        <div>
            {
                products.map((oneProduct) => {
                    return (
                        <div key={oneProduct._id}>
                            <Link to={"/products/" + oneProduct._id} >
                                <p>Title: {oneProduct.title}</p>
                            </Link>
                            <p>Price: {oneProduct.price} €</p>
                            <p>Description: {oneProduct.description} </p>
                            <Link to={`/products/edit/${oneProduct._id}`}>Edit</Link> 
                            <br/>    
                            {console.log("hani fi display ",oneProduct._id)}
                            <DeleteButton id={oneProduct._id} deleteCallBack={() => setTimeout(() => nav("/"), 1)}/>
                            <hr/>
                        </div>
                    )
                })
            }
    </div>
    )
}

export default Display