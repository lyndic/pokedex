import React from 'react';

import './styles.css';

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
                    <div className="top-screen"></div>
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