import React, { useEffect, useState } from "react";

const ProductForm = (props) => {
    const [product, setProduct] = useState(props.productDetails);

    useEffect(() => setProduct(props.productDetails), [props.productDetails]);
    
    const handleSubmit = (e) => {
    e.preventDefault();
        
    props.submitDetails(product);
     
  };

    return (
    <form onSubmit={(e) => handleSubmit(e)} >
        
        <div>
            <label >Title</label>
            <input  value={product.title} name ='title' onChange ={(e)=>{ setProduct({ ...product, [e.target.name]: e.target.value })} }/>
        </div>
        <div >
            <label >Price</label>
            <input type='number' name ='price'  onChange={(e) =>setProduct({ ...product, [e.target.name]: e.target.value })}value={product.price}/>
        </div>
        <div>
            <label>Desciption</label>
            <textarea cols={30}  rows = {5}name="description" onChange={(e) =>setProduct({ ...product, [e.target.name]: e.target.value })}value={product.description}/>
        </div>
            <input type="submit" value={props.submitValue}/>
    </form>
    );
};

export default ProductForm;