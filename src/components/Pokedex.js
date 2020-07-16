import React from 'react';

import './styles.css';

/**
 *  Pokedex structure and appearance/styles
 */

export default function Pokedex() {
    return(
        <>
            <div className="pokedex-container">
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
                        <input type="text" name="search" className="search-box" />
                        <input type="submit" value="Find" className="search-btn" />
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
                <div className="bottom-container">
                    <div className="arrow left"></div>
                    <div className="bottom-screen"></div>
                    <div className="arrow right"></div>
                </div>
            </div>
        </>
    )
}