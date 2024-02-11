import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from './ProductForm'
const Edit = () => {
    
    const [product, setProduct] = useState({
        title: "",
        price:0,
        description: "",
      });
    
    const { id } = useParams()
    const nav = useNavigate()
    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/products/${id}`)
          .then((res) => {
            console.log("edit ",res.data)
            setProduct(res.data);
          })
          .catch((err) => console.log(err));
      }, [id]);
    
      const updateProduct = (product) => {
        axios
          .patch(`http://localhost:5000/api/products/${id}`, product)
          .then((res) => {
            nav("/") 
          })
          .catch((err) => console.log(err));
      };
    
      return (
        <ProductForm  productDetails={product}  submitDetails={updateProduct} sumbitValue="Edit" />
      );
    };
    

export default Edit