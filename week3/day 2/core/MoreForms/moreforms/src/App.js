import './App.css';
import {useState} from 'react';
import ShowUser from './components/User';
function App() {      
      const[firstname,setFirstname]=useState("");
      const[lastname,setLastname]=useState("");
      const[email,setEmail]=useState("");
      const[password,setPassword]=useState("");
      const[confirmpassword,setConfirmpassword]=useState("");

      const [allUsers,setAllUsers]=useState([]);
      const createUser = (e)=>{
        e.preventDefault()
        const newUser={
          firstname ,
          lastname,
          email,
          password,
          confirmpassword
        }
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");  
      setAllUsers([...allUsers,newUser]);
      console.log(allUsers)

  }
  return (
    <div className="App">
      <form onSubmit={createUser}>
        <div>  
          <label>First Name:</label>
          <input type='text' onChange  ={ (e) =>setFirstname(e.target.value)} value={firstname}/>
          {firstname.length <=2  ? <p style={{color:"red"}}> First Name must be at least 2 characters</p> : ""}
        </div>  
        <div>
          <label>Last Name:</label>
          <input type='text' onChange  ={ (e) =>setLastname(e.target.value)} value={lastname}/>
          {lastname.length <=2  ? <p style={{color:"red"}}> Last Name must be at least 2 characters</p> : ""}
        </div>
        <div>  
          
          <label>Email:</label>
          <input type='text' onChange  ={ (e) =>setEmail(e.target.value)} value={email}/>
          {email.length <=5  ? <p style={{color:"red"}}> Email must be at least 5 character</p> : ""}
        </div>
        <div>  
          <label>Password</label>
          <input type='password' onChange  ={ (e) =>setPassword(e.target.value)} value={password}/>
          {password.length <=8  ? <p style={{color:"red"}}> Password must be at least 8 character</p> : ""}

        </div> 
        <div> 
          <label>Confirm Password</label>
          <input type='password' onChange  ={ (e) =>setConfirmpassword(e.target.value)} value={confirmpassword}/>
          {password != confirmpassword  ? <p style={{color:"red"}}> Passwords must match</p> : ""}

        </div>
          <button type='submit'>Add User</button>
      </form>
    <br/>
    {allUsers.map( oneUser =><ShowUser oneUser={oneUser}/>)}      
    </div>
  );
}

export default App;
