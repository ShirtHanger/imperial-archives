import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function VehicleList(props) {

    /* Guard operator, this will display if the API takes too long to load */

    if (!props.vehicles) { /* If API is slow, say you're loading... */
        return <h1> Loading vehicles... </h1>
    } else {

        return (
        <>
            <h3>Vehicles File</h3>
            <div className="grid">
                {/* Just using array.map to populate this component with API data, same old same old */}
                {/* Summons each vehicle object and grabs its poster and backdrop */}
                {props.vehicles.map((vehicle, index) => (
                    <article key={index} className="card">
                        <h4 className="main-name">{vehicle.name}</h4>
                        <h6 className='sub-detail'>${vehicle.cost_in_credits}</h6>
                    </article>
                ))}
            </div>
        </>
        )
    }
}

export default VehicleList
