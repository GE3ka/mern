import {useEffect, useState } from 'react';
import axios from 'axios';
function App() {    
        const [pokemons, setPokemons] = useState([])    
        useEffect(() => {
            axios.get('https://pokeapi.co/api/v2/pokemon/') // req Get
          .then(res => {
            //! axios wraps the res in it's own .data key
            setPokemons([res.data.results][0])           
          })
          .catch(err => {
              console.log(err)
            })            
        },[setPokemons])
  return (
    <div className="App">
      <h1> Pokemons </h1>
      { console.log("list of pokemons:", pokemons)}
            {
            pokemons.map((onepokemon, index)=>
              <div key={index}>
              {onepokemon.name}
              </div>
            )  
          }           
    </div>
  );
}

export default App;
