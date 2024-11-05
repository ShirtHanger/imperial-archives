import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function CharacterList(props) {

    /* Guard operator, this will display if the API takes too long to load */

    if (!props.people) { /* If API is slow, say you're loading... */
        return <h1> Loading characters... </h1>
    } else {

        return (
        <>
            <h3>Characters File</h3>
            <div className="grid">
                {/* Just using array.map to populate this component with API data, same old same old */}
                {/* Summons each people object and grabs its poster and backdrop */}
                {props.people.map((currentPeople, index) => (
                    <article key={index} className="card">
                        <Link to={`/characters/${currentPeople.name}`}><h4 className="main-name">{currentPeople.name}</h4></Link>
                        <h6 className='sub-detail'>Birth year: {currentPeople.birth_year}</h6>
                    </article>
                ))}
            </div>
        </>
        )
    }
}

export default CharacterList
