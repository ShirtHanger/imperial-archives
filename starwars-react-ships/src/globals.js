/* I saw there were 36 starships in the API and I wanted all of them, so I did some digging */

/* Base link (https://swapi.dev/api/starships/?format=json) only contained 10 */

export const BASE_URL = `https://swapi.dev/api/`

export const JSON_QUERY = `/?format=json`

/* 

<h5>{starShip.starship_class}</h5>
<h5>Hyperdrive rating: {starShip.hyperdrive_rating}</h5>
<h5>Model: {starShip.model}</h5>
<p>The {starShip.name} was Manufactured by {starShip.manufacturer}, it can house {starShip.crew} crew members and {starShip.passengers} total passangers!</p>

*/