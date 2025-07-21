// src/components/CharacterPage.jsx
import { useParams } from "react-router-dom" //Required to access specific NAME of selected Character
// import FilmList from './FilmList'

/* Planning on linking each character, film, starship, etc. to eachother, as each object contains a link to its related items
Testing in the characters page.
    I must:
    1. Obtain the link to related object
    2. Create an array containing the API data of all links. Preferably without calling axios again
    3. Pass in that array as a prop 
  */

const CharacterPage = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Character into a variable
    const { characterName } = useParams()
    
    console.log('Character NAME:', characterName)

    // Locates character with find(), so we can render data of that Character only!
    const singleCharacter = props.people.find((character) => 
        character.name === characterName) /* Finds character by its NAME */
    console.log('Character Object:', singleCharacter)

    // console.log('Related films:', singleCharacter.films)

    // singleCharacter.films.map((filmLink) => {
    //   console.log(`Film link:`, filmLink)
    // })

    if (!singleCharacter) {
        return <h2>The library has no records on "{characterName}".</h2>;
    }

    return (
      <>
        <h2>{singleCharacter.name}</h2>
        <p>{singleCharacter.name} was born during the year {singleCharacter.birth_year}</p> 
        <p>They stand at {singleCharacter.height}cm, weight {singleCharacter.mass}kg</p>
        <p>They can be identified by their {singleCharacter.skin_color} skin and {singleCharacter.hair_color} hair</p>

        {/* <h3>Related films</h3> */}

        {/* <FilmList films={relatedFilms}/> */}
      </>
    )
  }
  
  export default CharacterPage
  