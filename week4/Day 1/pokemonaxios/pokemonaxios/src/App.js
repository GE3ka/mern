import {useEffect, useState } from 'react';
import axios from "axios"

function App() {
  
  const [pokemons, setPokemons] = useState(null);
 
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response=>{setPokemons(response.data)})
    }, []); 
  
{/*
  const axiosPokemons = () => {
    axios.get(" https://pokeapi.co/api/v2/pokemon/") 
      .then(res => {
        console.log(res.data)
        
        setPokemons(res.data)
       
      })
      .catch(err => {
        console.log(err)
      })
  }
*/}
  return (
    <div className="App">
      <h1> Pokemons </h1>

      <button >Axios Pokemons</button> <br />

       {JSON.stringify(pokemons)} 

      <hr />
   
      <table>
        <thead>
          <tr>
            {console.log(pokemons)}
            <th>Name</th>
          
          </tr>
        </thead>
        <tbody>
          {
            pokemons.map((pokemon) => {
              return <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                
              </tr>
            })
          } 
        </tbody>
      </table>

    </div>
  );
}

export default App;
