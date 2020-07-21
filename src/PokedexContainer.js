import React, {useState, useEffect, useRef} from 'react'
import {useKey} from './hooks/useKey';

import PokedexTop from './PokedexTop/PokedexTop';
import PokedexBottom from './PokedexBottom/PokedexBottom';

import logo from './assets/pokedex_logo.png';
import './App.css';

// Import Pokedex api to fetch pokemon data
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

export default function PokedexContainer() {
    const [pokemon, setPokemon] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState('');
    const [prevPokemon, setPrevPokemon] = useState();
    const [nextPokemon, setNextPokemon] = useState();
    const [onLoad, setLoading] = useState(false);
    const [welcomeScreen, setScreen] = useState(true);

    useEffect(() => {
        // Set welcome screen if no pokemon is selected, else set Pokémon profile
        if (currentPokemon === '' || currentPokemon === undefined) {
            setScreen(true);
        } else {
            setScreen(false);

            // Loading icon will be displayed
            setLoading(true);

            setTimeout(async () => {
                await P.getPokemonByName(currentPokemon.toLowerCase())                     .then(res => {
                        setLoading(false);

                        setPrevPokemon(res.id - 1);
                        setNextPokemon(res.id + 1);
                        setPokemon([{res}]);
                    })
                    .catch(error => {
                        setLoading(false);
                        setScreen(true);
                        setPokemon([]);
                        console.log(error);
                    })
            }, 300);
        }
    }, [currentPokemon]);

    // Changes state to previous Pokémon in Pokédex
    function goToPrev() {
        // Prevents left arrow functionality if positioned at first Pokémon
        if (prevPokemon !== 0 && prevPokemon !== '') {
            setCurrentPokemon(`${prevPokemon}`);
        }
    }

    // Changes to state to next Pokémon in Pokédex
    function goToNext() {
        // If no Pokémon selected, sets Pokémon to the first 
        if (currentPokemon === 0 || currentPokemon === '') {
            setCurrentPokemon(`1`);
        } 
        // Prevents right arrow if positioned at last Pokémon
        else if (nextPokemon !== '' && nextPokemon !== 0) {
            setCurrentPokemon(`${nextPokemon}`);
        }
    }

    // Calls functions based on left and right arrow keys to change Pokémon state
    useKey(37, goToPrev);
    useKey(39, goToNext);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="pokedex text logo" />
            </header>
            <div className="pokedex-container">
                <PokedexTop 
                    welcomeScreen={welcomeScreen}
                    pokemon={pokemon}
                    loading={onLoad}
                    setCurrentPokemon={setCurrentPokemon}
                />
                <PokedexBottom 
                    pokemon={pokemon}
                    setPokemon={setPokemon}
                    goToPrev={goToPrev}
                    goToNext={goToNext}
                />
            </div>
        </div>
    )
}
