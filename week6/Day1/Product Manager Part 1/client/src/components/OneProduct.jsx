import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const OneProduct = () => {

    const [product, setProduct] = useState(null)
    
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:5000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[id])
    


  return (
        <div>
        Check the details of the selected product 
            {
                product ? (
                    <>
                        <h2>{product.title}</h2>
                        <p>{product.price} €</p>
                        <p>{product.description}</p>
                    </>
              ):<h3>Loading ...</h3>
          }
          
          </div>
  )
}

export default OneProduct