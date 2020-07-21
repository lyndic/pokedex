import React from 'react';

/*
** Handles right arrow button click - changing to next Pokémon
*/
export default function NextArrow({goToNext}) {
    return (
        <div className="arrow right" onClick={goToNext}></div>
    )
}
