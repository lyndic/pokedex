import React from 'react'

import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';

import './PokedexBottom.css';

/*
**  Structure of bottom half of Pokédex
*/
export default function PokedexBottom({pokemon, goToPrev, goToNext}) {
    return (
        <div className="bottom-container">
            <PreviousArrow goToPrev={goToPrev} />
            <div className="bottom-screen">
                {pokemon.map(p => (
                    <div key={p} className="pokemon-stats">
                        <p>Name: &nbsp;{p.res.name}</p>
                        <p>Height: &nbsp;{p.res.height}&nbsp;
                            <span style={{textTransform:"lowercase"}}>dm</span>
                        </p>
                        <p>
                            Weight: &nbsp;{p.res.weight}&nbsp;
                            <span style={{textTransform:"lowercase"}}>hg</span>
                        </p>
                    </div>
                ))}
            </div>
            <NextArrow goToNext={goToNext} />
        </div>
    )
}
