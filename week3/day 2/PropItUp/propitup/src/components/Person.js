import React from 'react';

const Person = (props) =>{
    const {fullName , age, hairColor} = props
    return(
        <div>
            <h2>{props.fullName}</h2> 
            
            <h4>Age: {props.age}  Hair Color:{props.hairColor}</h4>  
        </div>
    );
}
export default Person;