/* I saw there were 36 starships in the API and I wanted all of them, so I did some digging */

/* Base link (https://swapi.info/api/starships) */

export const BASE_URL = `https://swapi.info/api/`

export const JSON_QUERY = `/?format=json`

/* 

<h5>{singleStarship.starship_class}</h5>
<h5>Hyperdrive rating: {singleStarship.hyperdrive_rating}</h5>
<h5>Model: {singleStarship.model}</h5>
<p>The {singleStarship.name} was Manufactured by {singleStarship.manufacturer}, it can house {singleStarship.crew} crew members and {singleStarship.passengers} passangers()!</p>

*/

/* 

OLD API Link = https://swapi.dev/api/
Required the JSON_QUERY variable to work.
No longer works as of January 2025


More community run links incase swapi.info punks out as well

https://dev.to/simplr_sh/star-wars-apis-swapi-2025-403l

Drop-in Replacements
Swapi.info:- https://swapi.info/
Swapi.tech:- https://swapi.tech/
Swapi Node:- https://swapi-node.vercel.app/
Swapi Py4e:- https://swapi.py4e.com/
Swapi Pipedream:- https://pipedream.com/apps/swapi

Tweaked, Simplr Alternative.
JSON files based, Cloudflare Edge-based, ultra-low latency, highly available, forever free service & Typescript SDK.
Simplr SW-API :- https://sw.simplr.sh
Simplr Typescript SWAPI SDK :- https://www.npmjs.com/package/@simplr-sh/swapi-sdk

*/