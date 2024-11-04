import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function FilmList(props) {

    /* Guard operator, this will display if the API takes too long to load */

    if (!props.films) { /* If API is slow, say you're loading... */
        return <h1> Loading films... </h1>
    } else {

        return (
        <>
            <h3>Films File</h3>
            <div className="grid">
                {/* Just using array.map to populate this component with API data, same old same old */}
                {/* Summons each film object and grabs its poster and backdrop */}
                {props.films.map((film, index) => (
                    <article key={index} className="card">
                        <h6 className='sub-detail'>EPISODE {film.episode_id}</h6>
                        <h4 className="main-name">{film.title}</h4>
                        <p>{film.release_date}</p>
                    </article>
                ))}
            </div>
        </>
        )
    }
}

export default FilmList
