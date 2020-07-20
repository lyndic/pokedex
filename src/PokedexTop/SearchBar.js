import React from 'react';
import {useInput} from '../hooks/useInput';

export default function SearchBar({setCurrentPokemon}) {
    const {value: findPokemon, bind, reset: resetPokemon} = useInput('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (findPokemon === '') {
            resetPokemon();
        }
        setCurrentPokemon(findPokemon)
        resetPokemon();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" className="search-box" {...bind} />
            <input type="submit" value="Find" className="search-btn" />
        </form>
    )
}