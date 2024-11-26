// src/components/VehiclePage.jsx
import { useParams } from "react-router-dom" //Required to access specific NAME of selected Vehicle

const VehiclePage = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the NAME of selected Vehicle into a variable
    const { vehicleName } = useParams()
    
    console.log('Vehicle NAME:', vehicleName)

    // Locates vehicle with find(), so we can render data of that Vehicle only!
    const singleVehicle = props.vehicles.find((vehicle) => 
        vehicle.name === vehicleName) /* Finds vehicle by its NAME */
    console.log('Vehicle Object:', singleVehicle)

    if (!singleVehicle) {
        return <h2>The library has no records on "{vehicleName}".</h2>;
    }

    return (
      <>
        <h2>{singleVehicle.name}</h2>
        <h5>({singleVehicle.vehicle_class} Class)</h5>
        <h5>Model: {singleVehicle.model}</h5>
        <h5>Max Atmosphering Speed: {singleVehicle.max_atmosphering_speed}</h5>
        <h5>Manufactured by: {singleVehicle.manufacturer}</h5>
        <p>The {singleVehicle.name} was Manufactured by {singleVehicle.manufacturer}, it can house {singleVehicle.crew} crew member(s) and {singleVehicle.passengers} passanger(s)!</p>
        <p>The {singleVehicle.name} is worth {singleVehicle.cost_in_credits} credits</p>

      </>
    )
  }
  
  export default VehiclePage
  