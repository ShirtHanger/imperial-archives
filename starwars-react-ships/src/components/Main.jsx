import { useState } from 'react'
import StarshipList from './StarshipList'
import VehicleList from './VehicleList'
import SpeciesList from './SpeciesList'
import PlanetList from './PlanetList'
import FilmList from './FilmList'
import CharacterList from './CharacterList'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'

function Main(props) {
  

  return (
    <>
      <h2>[Declassified]</h2>
      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/characters' element={<CharacterList people={props.people}/>} />
        <Route path='/films' element={<FilmList films={props.films}/>} />
        <Route path='/planets' element={<PlanetList planets={props.planets}/>} />
        <Route path='/species' element={<SpeciesList species={props.species}/>} />
        <Route path='/starships' element={<StarshipList starShips={props.starShips}/>} />
        <Route path='/vehicles' element={<VehicleList vehicles={props.vehicles}/>} />
  

        {/* CATCH-ALL DEFAULT ROUTE, for errors */}
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />

      </Routes>
      
    </>
  )
}

export default Main
