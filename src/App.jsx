import { useState, useEffect } from 'react'
import './App.css'
import { BASE_URL, JSON_QUERY } from './globals'

import axios from 'axios'

import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [starShips, setStarShips] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {

 
    /*Originaly, only got first 10 objects from the API. The new community link gets you everything! */

    async function getStarWarsData(category, setStarWarsData) {
      let response = await axios.get(`${BASE_URL}${category}`)
      let currentPageOfData = response.data
      setStarWarsData(currentPageOfData)
      }

  /* Function used for original link (https://swapi.dev/api/${category}?format=json), old link is depracated
  New community link does not require this complex function */
   async function getAllStarWarsData(category, setStarWarsData) {
  
    let fullURL = `${BASE_URL}${category}${JSON_QUERY}` 
    let allPagesOfData = [] // This will be filled with ALL objects from the numerous response URLs 
    while (fullURL) { // When the final page is reached, break the while loop
    
      let response = await axios.get(fullURL)
      let currentPageOfData = response.data.results
      allPagesOfData = [...allPagesOfData, ...currentPageOfData] // Adds to list
      fullURL = response.data.next // Moves onto next page, unless none exist
      }

    setStarWarsData(allPagesOfData) // Sets array of API data to the final project, all pages
   }

    
  
      getStarWarsData('starships', setStarShips)
      getStarWarsData('people', setPeople)
      getStarWarsData('films', setFilms)
      getStarWarsData('planets', setPlanets)
      getStarWarsData('species', setSpecies)
      getStarWarsData('vehicles', setVehicles)
      
  }, [])



  return (
    <>
      <h1>Imperial Records Library</h1>
      <Header></Header>

      <Main 
      people={people}
      films={films}
      planets={planets}
      species={species}
      starShips={starShips}
      vehicles={vehicles}
      />
      
    </>
  )
}

export default App
