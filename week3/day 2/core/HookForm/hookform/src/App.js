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
        </div>  
        <div>
          <label>Last Name:</label>
          <input type='text' onChange  ={ (e) =>setLastname(e.target.value)} value={lastname}/>
          
        </div>
        <div>  
          
          <label>Email:</label>
          <input type='text' onChange  ={ (e) =>setEmail(e.target.value)} value={email}/>
        </div>
        <div>  
          <label>Password</label>
          <input type='text' onChange  ={ (e) =>setPassword(e.target.value)} value={password}/>
        </div> 
        <div> 
          <label>Confirm Password</label>
          <input type='text' onChange  ={ (e) =>setConfirmpassword(e.target.value)} value={confirmpassword}/>
        </div>
          <button type='submit'>Add User</button>
      </form>
    <br/>
    {allUsers.map( oneUser =><ShowUser oneUser={oneUser}/>)}

    </div>

  );
}

export default App;
