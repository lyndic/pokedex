import React from 'react'

import SearchBar from './SearchBar';
import pokeball from '../assets/pokeball.png';

import './PokedexTop.css';

/*
*   Visual structure of Pokédex top half - screen, speakers, search bar, and Pokémon image
*/

export default function PokedexTop({pokemon, loading, setCurrentPokemon, welcomeScreen}) {
    return (
        <div className="top-container">
            <div className="speaker-container">
                <div className="speaker">
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                </div>
                <div className="speaker">
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                </div>
                <div className="speaker">
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                </div>
            </div>
            <div className="top-screen">
                <SearchBar setCurrentPokemon={setCurrentPokemon} />
                {welcomeScreen ?  
                    <div className="welcome">
                        Type the name or ID of a Pokemon
                        above or use the arrow buttons below to 
                        browse the Pokedex.
                    </div>
                : null}
                {loading ? 
                    <img className="loading-pokeball" src={pokeball} alt="pokeball spinning" />
                : 
                <>{pokemon.map(p => (
                    <div key={p.res.id}>
                    <img className="profile-img" alt="pokemon" src={p.res.sprites.front_default} />
                    </div>
                ))}
                </>}
            </div>
            <div className="speaker-container">
                <div className="speaker">
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                </div>
                <div className="speaker">
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                </div>
                <div className="speaker">
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                    <div className="speaker-vents"></div>
                </div>
            </div>
        </div>
    )
}
