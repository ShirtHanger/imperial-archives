/* import { useState } from 'react' */
import { Link } from 'react-router-dom'

function Nav(props) {

  return (
    <>
      <h3>(None of these work RN)</h3>
      <ul>
        <li><Link to='/' className="list-link">Home</Link></li>

        <li><Link to='/characters' className="list-link">Characters</Link></li>
        <li><Link to='/films' className="list-link">Films</Link></li>
        <li><Link to='/planets' className="list-link">Planets</Link></li>
        <li><Link to='/species' className="list-link">Species</Link></li>
        <li><Link to='/starships' className="list-link">Starships</Link></li>
        <li><Link to='/vehicles' className="list-link">Vehicles</Link></li>
      </ul>
    </>
  )
}

export default Nav
