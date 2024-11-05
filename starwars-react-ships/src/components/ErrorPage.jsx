import { useState, useEffect } from "react"

function ErrorPage(props) {

    function randomNumber(array) {
        return Math.floor(Math.random() * array.length)
    }

    const errorMemes = [
        {
            message: 'I find your lack of faith disturbing.',
            image: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Star-Wars-Darth-Vader-Everett-MMDSTWA_FE009-H-2023.jpg',
            alt: 'Darth Vader'
        },
        {
            message: 'Impossible! Perhaps the archives are incomplete',
            image: 'https://static.wikia.nocookie.net/star-wars-memes/images/a/ac/6DDD0687-03D7-41BA-9345-B9F4F0964428.jpeg',
            alt: 'Obi-Wan Kenobi'
        },
        {
            message: 'The sacred texts!',
            image: 'https://static.wikia.nocookie.net/star-wars-memes/images/a/a1/Sacredtexts.jpg',
            alt: 'Luke Skywalker'
        },
        {
            message: '[Visible Confusion]',
            image: 'https://static.wikia.nocookie.net/star-wars-memes/images/8/89/Download_%2830%29.jpeg',
            alt: 'Obi-Wan Kenobi'
        },
        {
            message: 'Liar!',
            image: 'https://static.wikia.nocookie.net/star-wars-memes/images/e/ee/Liar.png',
            alt: 'Anakin Skywalker'
        },
        {
            message: 'Lies, deception',
            image: 'https://static.wikia.nocookie.net/star-wars-memes/images/b/b1/Lies-deception.png',
            alt: 'Saw Gerrera'
        },
        {
            message: 'I killed them all. Not just the men, but the women, and children too.',
            image: 'https://static.wikia.nocookie.net/star-wars-memes/images/8/81/Maxresdefault_%281%29.jpg',
            alt: 'Anakin Skywalker'
        },

    ]

    const randIndex = randomNumber(errorMemes)
    
    const [randNum, setRandNum] = useState(randIndex);

    return (
        <>
            <h2>{errorMemes[randNum].message}</h2>
            <img src={`${errorMemes[randNum].image}`} alt={`${errorMemes[randNum].alt}`} />
        </>
    )
}

export default ErrorPage