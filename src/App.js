import { useState } from 'react'
import './App.css'
import { Figure } from './components/Figure'
import { Header } from './components/Header'
import { Word } from './components/Word'
import WrongLetters from './components/WrongLetters'

const words = ['application', 'programming', 'interface', 'wizard']

let selectedWord = words[Math.floor(Math.random() * words.length)]

function App () {
  const [playbale, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
      </div>
      <WrongLetters />
      <Word />
    </>
  )
}

export default App
