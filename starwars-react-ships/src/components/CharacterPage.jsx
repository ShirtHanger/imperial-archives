// src/components/CharacterPage.jsx
import { useParams } from "react-router-dom" //Required to access specific NAME of selected Character

const CharacterPage = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Character into a variable
    const { characterName } = useParams()
    
    console.log('Character NAME:', characterName)

    // Locates character with find(), so we can render data of that Character only!
    const singleCharacter = props.people.find((character) => 
        character.name === characterName) /* Finds character by its NAME */
    console.log('Character Object:', singleCharacter)

    if (!singleCharacter) {
        return <h2>The library has no records on "{characterName}".</h2>;
    }

    return (
      <>
        <h2>{singleCharacter.name}</h2>
        <p>{singleCharacter.name} was born during the year {singleCharacter.birth_year}</p> 
        <p>They stand at {singleCharacter.height}cm, weight {singleCharacter.mass}kg</p>
        <p>They can be identified by their {singleCharacter.skin_color} skin and {singleCharacter.hair_color} hair</p>
      </>
    )
  }
  
  export default CharacterPage
  