// src/components/StarshipPage.jsx
import { useParams } from "react-router-dom" //Required to access specific NAME of selected Starship

const StarshipPage = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Starship into a variable
    const { starshipName } = useParams()
    
    console.log('Starship NAME:', starshipName)

    // Locates starship with find(), so we can render data of that Starship only!
    const singleStarship = props.starShips.find((starship) => 
        starship.name === starshipName) /* Finds starship by its NAME */
    console.log('Starship Object:', singleStarship)

    if (!singleStarship) {
        return <h2>The library has no records on "{starshipName}".</h2>;
    }

    return (
      <>
        <h2>{singleStarship.name}</h2>
        <h5>({singleStarship.starship_class} Class)</h5>
        <h5>Model: {singleStarship.model}</h5>
        <h5>Hyperdrive rating: {singleStarship.hyperdrive_rating}</h5>
        <h5>Megelights per hour (MGLT): {singleStarship.MGLT}</h5>
        <h5>Max Atmosphering Speed: {singleStarship.max_atmosphering_speed}</h5>
        <h5>Manufactured by: {singleStarship.manufacturer}</h5>
        <p>The {singleStarship.name} was Manufactured by {singleStarship.manufacturer}, it can house {singleStarship.crew} crew members and {singleStarship.passengers} passanger(s)!</p>
        <p>The {singleStarship.name} is worth {singleStarship.cost_in_credits} credits</p>
      </>
    )
  }
  
  export default StarshipPage
  