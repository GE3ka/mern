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
                            <p>Description: {oneProduct.price} </p>
                            
                            <hr/>
                        </div>
                    )
                })
            }


    </div>
  )
}

export default Display