import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function SpeciesList(props) {

    /* Guard operator, this will display if the API takes too long to load */

    if (!props.species) { /* If API is slow, say you're loading... */
        return <h1> Loading species... </h1>
    } else {

        return (
        <>
            <h3>Species File</h3>
            <div className="grid">
                {/* Just using array.map to populate this component with API data, same old same old */}
                {/* Summons each species object and grabs its poster and backdrop */}
                {props.species.map((currentSpecies, index) => (
                    <article key={index} className="card">
                        <h4 className="main-name">{currentSpecies.name}</h4>
                        <h6 className='sub-detail'>{currentSpecies.designation} {currentSpecies.classification}</h6>
                        <p>Language: {currentSpecies.language}</p>
                    </article>
                ))}
            </div>
        </>
        )
    }
}

export default SpeciesList
