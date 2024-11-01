import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [starShips, setStarShips] = useState([])

  return (
    <>
      <h1>This is the App file!</h1>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App
