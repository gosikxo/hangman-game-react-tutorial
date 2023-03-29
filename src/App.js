import './App.css';
import { Figure } from './components/Figure';
import { Header } from './components/Header';
import { Word } from './components/Word';
import WrongLetters from './components/WrongLetters';

function App () {
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
      </div>
      <WrongLetters />
      <Word />
    </>
  );
}

export default App;
