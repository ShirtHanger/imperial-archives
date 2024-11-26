/* I saw there were 36 starships in the API and I wanted all of them, so I did some digging */

/* Base link (https://swapi.dev/api/starships/?format=json) only contained 10 */

export const BASE_URL = `https://swapi.dev/api/`

export const JSON_QUERY = `/?format=json`

/* 

<h5>{singleStarship.starship_class}</h5>
<h5>Hyperdrive rating: {singleStarship.hyperdrive_rating}</h5>
<h5>Model: {singleStarship.model}</h5>
<p>The {singleStarship.name} was Manufactured by {singleStarship.manufacturer}, it can house {singleStarship.crew} crew members and {singleStarship.passengers} passangers()!</p>

*/