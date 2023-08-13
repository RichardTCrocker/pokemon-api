import React, {useState} from "react";

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const getPoke = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => {
            return response.json()
        }
        )
        .then(responseJson => {
            setPokemon(responseJson.results)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Get Pokemon</h1>
            <div  style={{display:'flex', justifyContent:'center'}}>
                <ul>
                    {pokemon.map((pokemon, idx) =>
                    <li key={idx}>{pokemon.name}</li>
                    )}
                    
                </ul>
            </div>
            <button onClick={getPoke}>Get All Pokemon</button>
        </div>
    )
}

export default FetchPokemon