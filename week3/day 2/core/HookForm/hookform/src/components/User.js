import React from 'react'
function ShowUser(props){
    const {firstname,lastname,email,password,confirmpassword}=props.oneUser
    return(
        
        <div>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
            <br></br>
        </div>
    );

}
export default ShowUser