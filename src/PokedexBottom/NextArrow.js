import React from 'react'

export default function NextArrow({goToNext}) {
    return (
        <div className="arrow right" onClick={goToNext}></div>
    )
}
