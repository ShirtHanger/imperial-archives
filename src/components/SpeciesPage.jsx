// src/components/SpeciesPage.jsx
import { useParams } from "react-router-dom" //Required to access specific NAME of selected Species

const SpeciesPage = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Species into a variable
    const { speciesName } = useParams()
    
    console.log('Species NAME:', speciesName)

    // Locates species with find(), so we can render data of that Species only!
    const singleSpecies = props.species.find((currentSpecies) => 
        currentSpecies.name === speciesName) /* Finds species by its NAME */
    console.log('Species Object:', singleSpecies)

    if (!singleSpecies) {
        return <h2>The library has no records on "{speciesName}".</h2>;
    }

    return (
      <>
        <h2>{singleSpecies.name}</h2>
        <p>A {singleSpecies.designation} {singleSpecies.classification} species</p>
        <p>They speak the {singleSpecies.language} language and live an average of {singleSpecies.average_lifespan} years</p>

        <h3>Common features:</h3>
        <dl>
          <h4>Hair Colors</h4>
          <dd>{singleSpecies.hair_colors}</dd>
          <h4>Skin Colors/Variations</h4>
          <dd>{singleSpecies.skin_colors}</dd>
          <h4>Eye Colors</h4>
          <dd>{singleSpecies.eye_colors}</dd>
        </dl>
      </>
    )
  }
  
  export default SpeciesPage
  