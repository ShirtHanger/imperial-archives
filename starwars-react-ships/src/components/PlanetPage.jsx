// src/components/PlanetPage.jsx
import { useParams } from "react-router-dom" //Required to access specific NAME of selected Planet

const PlanetPage = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Planet into a variable
    const { planetName } = useParams()
    
    console.log('Planet NAME:', planetName)

    // Locates planet with find(), so we can render data of that Planet only!
    const singlePlanet = props.planets.find((planet) => 
        planet.name === planetName) /* Finds planet by its NAME */
    console.log('Planet Object:', singlePlanet)

    if (!singlePlanet) {
        return <h2>The library has no records on "{planetName}".</h2>;
    }

    return (
      <>
        <h2>{singlePlanet.name}</h2>
        <h3>Population: {singlePlanet.population}</h3>
        <p>{singlePlanet.name} is a planet with a {singlePlanet.climate} climate, and {singlePlanet.terrain} terrain.</p>
        <p>Its gravity is rated at {singlePlanet.gravity} and has a total diameter of {singlePlanet.diameter}km</p>
        
        <dl>
          <h4>Orbital Period</h4>
          <dd>{singlePlanet.orbital_period}</dd>
          <h4>Rotation Period</h4>
          <dd>{singlePlanet.rotation_period}</dd>
          <h4>Surface Water</h4>
          <dd>{singlePlanet.surface_water}</dd>
        </dl>
        

      </>
    )
  }
  
  export default PlanetPage
  