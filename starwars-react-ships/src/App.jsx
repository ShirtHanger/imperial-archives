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

  useEffect(() => {

/* 
    The basic function that only gets you the first 10 ships
    Wasn't good enough for me. 
    I wanted ALL data, not just the first 10

    async function getStarWarsData(category, setStarWarsData) {
      let response = await axios.get(`${BASE_URL}${category}${JSON_QUERY}`)
      let currentPageOfData = response.data.results
      setStarWarsData(currentPageOfData)
      }
 */

/* I was finally able to get ALL data instead of just 10 using a for loop, which is also scaleable */
   async function getAllStarWarsData(category, setStarWarsData) {
  
    let fullURL = `${BASE_URL}${category}${JSON_QUERY}`
    let allPagesOfData = [] /* This will be filled with ALL objects from the numerous response URLs */
    while (fullURL) { /* When the final page is reached, break the while loop */
      
      let response = await axios.get(fullURL)
      let currentPageOfData = response.data.results
      allPagesOfData = [...allPagesOfData, ...currentPageOfData] /* Adds to list */
      fullURL = response.data.next /* Moves onto next page, unless none exist */
      }

    setStarWarsData(allPagesOfData) /* Sets array of API data to the final project, all pages */
   }

    
  
      getAllStarWarsData('starships', setStarShips)
      getAllStarWarsData('people', setPeople)
      getAllStarWarsData('films', setFilms)
      getAllStarWarsData('planets', setPlanets)
      
  }, [])



  return (
    <>
      <h1>Welcome to the Star Wars data app!</h1>
      <Header></Header>

      <Main 
      starShips={starShips}
      people={people}
      films={films}
      planets={planets}
      />
      
    </>
  )
}

export default App
