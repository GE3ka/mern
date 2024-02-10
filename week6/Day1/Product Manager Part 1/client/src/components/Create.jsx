import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {


    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState("")
    const nav = useNavigate()
    

    const SubmitHandler = (e) => {
        e.preventDefault()
        const tepObjectProduct = {
            title,
            price,
            description,
        }

        axios.post("http://localhost:5000/api/products/", tepObjectProduct)
            .then(res => {
                console.log("✅✅✅✅✅", res.data)
                nav("/")
            })
        .catch(err=> console.log("❌❌❌❌❌❌",err))
    }



    return (
        <div>
            
            <form onSubmit={SubmitHandler}>
                <div>
                    Title:
                    <input  value={title} onChange={e =>{setTitle(e.target.value)}}/>
                </div>
                <div>
                    Price:
                    <input type='number' value={price} onChange={e =>{setPrice(e.target.value)}}/>
                </div>
                <div>
                    Description:
                    <input  value={description} onChange={e =>{setDescription(e.target.value)}}/>
                </div>
                
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default Create