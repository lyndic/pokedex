import React from 'react';

/*
** Handles left arrow button click - changing to previous Pokémon
*/
export default function PreviousArrow({goToPrev}) {
    return (
        <div className="arrow left" onClick={goToPrev}>
        </div>
    )
}
