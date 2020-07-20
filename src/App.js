import React, {useState, useEffect} from 'react';
import axios from 'axios';

import logo from './pokedex_logo.png';
import './App.css';

import Pokedex from './Pokedex';

/**
 *  Contains entire Pokedex app - source of truth
 */

function App() {
  const [pokemon, selectPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState("https://pokeapi.co/api/v2/pokemon/ability/");
  const [nextPokemon, setNextPokemon] = useState();
  const [prevPokemon, setPrevPokemon] = useState();
  const [onLoad, setLoading] = useState(true);

  useEffect(() => {
    // Loading icon will be instantly displayed
    setLoading(true);
    let discardLastPokemon;

    // When pokemon is selected, discard current pokemon to display new data
    axios.get(currentPokemon, {
      cancelToken: new axios.CancelToken(cancel => discardLastPokemon = cancel)
    })
    .then(res => {
      // Stop loading pokeball when data is fetched
      setLoading(false);

      // Populate previous, next, and current pokemon
      setPrevPokemon(res.data.previous);
      setNextPokemon(res.data.next);
      selectPokemon(res.data.results.map(poke => poke.name));
    });

    return () => discardLastPokemon();
  }, [currentPokemon]);

  // These functions set the state of the prev & next pokemon
  function switchToNextPokemon() {
    setCurrentPokemon(nextPokemon);
    console.log(`current pokemon: ${pokemon.id}`)
  }

  function switchToPrevPokemon() {
    setCurrentPokemon(prevPokemon);
  }

  // Display pokeball icon when loading
  if (onLoad) return 'Loading';


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      </header>
      <Pokedex 
        pokemon={pokemon}
        switchToPrevPokemon={prevPokemon ? switchToPrevPokemon : null}
        switchToNextPokemon={nextPokemon ? switchToNextPokemon : null}
        />
    </div>
  );
}

export default App;