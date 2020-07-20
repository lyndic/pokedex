import React from 'react'

import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';
import './PokedexBottom.css';

export default function PokedexBottom({pokemon, goToPrev, goToNext, setCurrentPokemon}) {
    return (
        <div className="bottom-container">
            {/* {switchToPrevPokemon && <div className="arrow left"></div>} */}
            <PreviousArrow goToPrev={goToPrev} />
            <div className="bottom-screen">
                {pokemon.map(p => (
                    <div key={p} className="pokemon-stats">
                        <p>Name: {p.res.name}</p>
                        <p>Height: {p.res.height}</p>
                        <p>Weight: {p.res.weight}</p>
                    </div>
                    
                ))}
            </div>
            <NextArrow goToNext={goToNext} />
            {/* {goToNext && <div className="arrow right"></div>} */}
        </div>
    )
}
