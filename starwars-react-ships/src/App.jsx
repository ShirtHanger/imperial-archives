import { useState, useEffect } from 'react'
import './App.css'
import { BASE_URL, BASE_STARSHIP_URL, PAGE_ONE_URL, PAGE_TWO_URL, PAGE_THREE_URL, PAGE_FOUR_URL, JSON_QUERY } from './globals'

import axios from 'axios'

import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [starShips, setStarShips] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])

  const allURLs = [PAGE_ONE_URL, PAGE_TWO_URL, PAGE_THREE_URL, PAGE_FOUR_URL]
  /* Will use array desructuring to mix these all into ONE array later */

  useEffect(() => {

    /* The basic function that only gets you the first 10 ships, wasn't good enough for me */
    async function getStarWarsData(category, setStarWarsData) {
      console.log('===========ADDING TO SHIPS ARRAY==============')
        let response = await axios.get(`${BASE_URL}${category}${JSON_QUERY}`)
        let currentPageOfData = response.data.results
        setStarWarsData(currentPageOfData)
      }


    /* Wanted to use a for loop to get this done but it didn't work out */
    /* Either the list is empty, or the list contains a clone of each individual ship (72 objects) */
/*     async function getAllStarships() {
      console.log('===========ADDING TO SHIPS ARRAY==============')
      let fullListOfShips = []
      for (let URL of allURLs) {
        let response = await axios.get(`${URL}`)
        let currentPageOfShips = response.data.results
  
        fullListOfShips = [...fullListOfShips, ...currentPageOfShips]

        console.log('-------------')
        console.log(currentPageOfShips)
        console.log(fullListOfShips)
        console.log('-------------')
      }

      console.log('===================ALL 36 Ships!=================')
      setStarShips(fullListOfShips)
      console.log(starShips)
    }
 */

    /* Worked, I got all 36 ships, but I am repeating myself... */
/*     async function getStarshipsByPage() {
      let pageOneResponse = await axios.get(`${PAGE_ONE_URL}`)
      let pageTwoResponse = await axios.get(`${PAGE_TWO_URL}`)
      let pageThreeResponse = await axios.get(`${PAGE_THREE_URL}`)
      let pageFourResponse = await axios.get(`${PAGE_FOUR_URL}`)

      let pageOne = pageOneResponse.data.results
      let pageTwo = pageTwoResponse.data.results
      let pageThree = pageThreeResponse.data.results
      let pageFour = pageFourResponse.data.results

      let allPagesofShips = [...pageOne, ...pageTwo, ...pageThree, ...pageFour]
      setStarShips(allPagesofShips)
    } */

    
  
      /* getAllStarships() */
      getStarWarsData('starships', setStarShips)
      getStarWarsData('people', setPeople)
      getStarWarsData('films', setFilms)
      getStarWarsData('planets', setPlanets)
      /* getStarshipsByPage() */

      console.log(starShips)
      console.log(people)
      console.log(films)
      console.log(planets)
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
