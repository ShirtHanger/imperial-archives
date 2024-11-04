import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function StarshipList(props) {

    /* Guard operator, this will display if the API takes too long to load */

    if (!props.starShips) { /* If API is slow, say you're loading... */
        return <h1> Loading starShips... </h1>
    } else {

        return (
        <>
            <h3>Starships File</h3>
            <div className="grid">
                {/* Just using array.map to populate this component with API data, same old same old */}
                {/* Summons each starShip object and grabs its poster and backdrop */}
                {props.starShips.map((starShip, index) => (
                    <article key={index} className="card">
                        <h4 className="main-name">{starShip.name}</h4>
                        <h6 className='sub-detail'>${starShip.cost_in_credits}</h6>
                    </article>
                ))}
            </div>
        </>
        )
    }
}

export default StarshipList
