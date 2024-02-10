import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Display = () => {

    const [products, setProducts] = useState([])
 
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
    const deleteProduct = (deleteId) => {
        axios.delete("http://localhost:5000/api/products/" + deleteId)
            .then(res => {
            const filteredProducts = products.filter((oneProduct) => {
                    return oneProduct._id !== deleteId
            })
            setProducts(filteredProducts)
            })

            .catch(err => {
                console.log(err)
            })
        
    }                                    
    
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
                            <button onClick={() => { deleteProduct(oneProduct._id) }}>Delete</button>
                            <hr/>
                        </div>
                    )
                })
            }
    </div>
    )
}

export default Display