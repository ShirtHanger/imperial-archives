import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function PlanetList(props) {

    /* Guard operator, this will display if the API takes too long to load */

    if (!props.planets) { /* If API is slow, say you're loading... */
        return <h1> Loading planets... </h1>
    } else {

        return (
        <>
            <h3>Planets File</h3>
            <div className="grid">
                {/* Just using array.map to populate this component with API data, same old same old */}
                {/* Summons each planet object and grabs its poster and backdrop */}
                {props.planets.map((planet, index) => (
                    <article key={index} className="card">
                        <Link to={`/planets/${planet.name}`}><h4 className="main-name">{planet.name}</h4></Link>
                        <h6 className='sub-detail'>Terrain</h6>
                        <p>{planet.terrain}</p>
                    </article>
                ))}
            </div>
        </>
        )
    }
}

export default PlanetList
