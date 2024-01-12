const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//divisible by 3
const arrDivByThree = pokémon.filter(onePokemon => onePokemon.id % 3 == 0)

console.log(arrDivByThree)
//all fire pokemons
const arrFirePokemon = pokémon.filter((onePokemon)  => {
    return onePokemon.types.includes ('fire')
})

console.log(arrFirePokemon)
//all pokemon with more than one type
const arrManyTypes = pokémon.filter(onePokemon => onePokemon.types.length >1)
console.log(arrManyTypes)

//all pokemons names
const arrPokemonNames = pokémon.map((onePokemon) =>{
    return onePokemon.name
})
console.log(arrPokemonNames)

//all pokemons with id>99

const arrPokemonNamesWithId = pokémon.filter((onePokemon)=>onePokemon.name ? onePokemon.id > 99 : '')
console.log(arrPokemonNamesWithId)

//all water pokemons
const arrWaterPokemon = pokémon.filter ((onepokemon)=> onepokemon.types.length = 1 && onepokemon.types.includes('water'))
console.log(arrWaterPokemon)

//all flying pokmeons

//all normal pokemons
