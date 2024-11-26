// src/components/FilmPage.jsx
import { useParams } from "react-router-dom" //Required to access specific TITLE of selected Film

const FilmPage = (props) => {
    console.log(props) // Always verify that any props are being passed correctly!

    // Pull the TITLE of selected Film into a variable
    const { filmTitle } = useParams()
    
    console.log('Film TITLE:', filmTitle)

    // Locates film with find(), so we can render data of that Film only!
    const singleFilm = props.films.find((film) => 
        film.title === filmTitle) /* Finds film by its TITLE */
    console.log('Film Object:', singleFilm)

    if (!singleFilm) {
        return <h2>The library has no records on "{filmTitle}".</h2>;
    }

    return (
      <>
        <h2>Episode {singleFilm.episode_id}: {singleFilm.title}</h2>
        <h3>Released: {singleFilm.release_date}</h3>
        <h4>Director(s): {singleFilm.director}</h4>
        <h4>Producer(s): {singleFilm.producer} </h4>
        <p>{singleFilm.opening_crawl}</p>

      </>
    )
  }
  
  export default FilmPage
  