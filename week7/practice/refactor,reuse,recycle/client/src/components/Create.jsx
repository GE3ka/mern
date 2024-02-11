import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from "../components/ProductForm";
const Create = (props) => {
    const nav = useNavigate()
    
  
    const createProduct = (product) => {
        const newProduct= product;
            axios.post("http://localhost:5000/api/products",newProduct)
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav("/")
            })
            .catch((err) => console.log(err));
        };


    return (
        <div>
            <ProductForm productDetails={{ title: "", price:0, description: "" }} submitDetails={createProduct} submitValue="create"/>     
        </div>
    )
}

export default Create