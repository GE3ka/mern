import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from "../components/ProductForm";
const Create = (props) => {
    const nav = useNavigate()
    
  
    const createProduct = (product) => {
        const { title, price, description } = product;
            axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description,
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