import React , { useState }from 'react';

const Person = (props) =>{
    const [age,setAge]= useState(props.initialAge);
    const {fullName , hairColor} = props
    return(
        <div>
            <h3>{props.fullName}</h3> 
            
            <h5>Age: {age} </h5>
            <h5> Hair Color:{props.hairColor}</h5>  
            <button onClick= {(e)=>setAge(age+1)} >Birthday</button>
        </div>
    );
}
export default Person;