import './App.css'
import Exercises from './components/Exercises'
import BitcoinRates from './components/BitcoinRates'
import BitcoinRates_Ex2 from './components/BitcoinRates_Ex2'
import BitcoinRates_Ex3 from './components/BitcoinRates_Ex3'
import { EmojiProvider } from './components/contex/EmojiContex'


function App() {

  return (
    <>
      <div className="exerciseBox">
        <Exercises name="Exercise 1" />
        <BitcoinRates />
      </div>
      <div className="exerciseBox">
        <Exercises name="Exercise 2" />
        <BitcoinRates_Ex2 />
      </div>
      
      <div className="exerciseBox">
          <Exercises name="Exercise 3" />
          <EmojiProvider>
            <BitcoinRates_Ex3 />
          </EmojiProvider>
      </div>
      
    </>
  )
}

export default App
