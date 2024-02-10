import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [Product, setProduct] = useState(null)
    
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState("")
    
    const { id } = useParams()
    const nav = useNavigate()

    const UpdateHandler = (e) => {
        e.preventDefault()
        const tepObjectProduct = {
            title,
            price,
            description,
        }

        axios.patch("http://localhost:5000/api/products/"+ id, tepObjectProduct)
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                console.log("i'm here ")
                nav("/")
            })
        .catch(err=> console.log("❌❌❌❌❌❌",err))
    }

    

    useEffect(() => {
        axios.get("http://localhost:5000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => {
            console.log(err)
        })
    },[id])
    return (
        <div>
            <h3>Edit your product here</h3>
            
            <form onSubmit={UpdateHandler}>
                <div>
                    Title:
                    <input  value={title} onChange={e =>{setTitle(e.target.value)}}/>
                </div>
                <div>
                        Price:
                    <input type='number'  value={price} onChange={e =>{setPrice(e.target.value)}}/>
                </div>
                <div>
                        Descirption: 
                    <textarea  cols = {50} rows = {5}  value={description} onChange={e =>{setDescription(e.target.value)}}/>
                </div>
               
                <button>Edit Product</button>
              
          </form>
      
      
      </div>
  )
}

export default Edit