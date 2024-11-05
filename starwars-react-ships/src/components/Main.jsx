import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Home from './Home'

import StarshipList from './StarshipList'
import VehicleList from './VehicleList'
import SpeciesList from './SpeciesList'
import PlanetList from './PlanetList'
import FilmList from './FilmList'
import CharacterList from './CharacterList'

import StarshipPage from './StarshipPage'
import VehiclePage from './VehiclePage'
import SpeciesPage from './SpeciesPage'
import CharacterPage from './CharacterPage'
import FilmPage from './FilmPage'
import PlanetPage from './PlanetPage'
import ErrorPage from './ErrorPage'




function Main(props) {
  

  return (
    <>
      <h2>Imperial Archives</h2>

      <Routes>

        <Route path='/' element={<Home/>} />

        {/* Character Routes */}

        <Route 
        path='/characters' 
        element={<CharacterList people={props.people}/>} 
        />
        <Route /* Route for specific character details, when you click on Character Link */
          path="/characters/:characterName"
          element={<CharacterPage people={props.people} />}
        />

        {/* Film Routes */}
        <Route 
        path='/films' 
        element={<FilmList films={props.films}/>} />
        <Route /* Route for specific film details, when you click on Film Link */
          path="/films/:filmTitle"
          element={<FilmPage films={props.films} />}
        />

        {/* Planet Routes */}
        <Route 
        path='/planets' 
        element={<PlanetList planets={props.planets}/>} />
        <Route /* Route for specific planet details, when you click on Planet Link */
          path="/planets/:planetName"
          element={<PlanetPage planets={props.planets} />}
        />

        {/* Species Routes */}
        <Route 
        path='/species' 
        element={<SpeciesList species={props.species}/>} 
        />
        <Route /* Route for specific species details, when you click on Species Link */
          path="/species/:speciesName"
          element={<SpeciesPage species={props.species} />}
        />

        {/* Starship routes */}
        <Route 
          path='/starships' 
          element={<StarshipList starShips={props.starShips}/>} 
        />
        <Route /* Route for specific starship details, when you click on Starship Link */
          path="/starships/:starshipName"
          element={<StarshipPage starShips={props.starShips} />}
        />

        {/* Vehicle Routes */}
        <Route 
        path='/vehicles' 
        element={<VehicleList vehicles={props.vehicles}/>} 
        />
        <Route /* Route for specific vehicle details, when you click on Vehicle Link */
          path="/vehicles/:vehicleName"
          element={<VehiclePage vehicles={props.vehicles} />}
        />
  

        {/* CATCH-ALL DEFAULT ROUTE, for errors */}
        <Route path="*" element={<ErrorPage/>} />

      </Routes>

      <h6>(Information provided and maintained by the Imperial Records Library. Long Live the Empire!)</h6>
      
    </>
  )
}

export default Main
