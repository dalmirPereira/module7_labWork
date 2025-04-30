import './App.css'
import Exercises from './components/Exercises'
import BitcoinRates from './components/BitcoinRates'
import BitcoinRates_Ex2 from './components/BitcoinRates_Ex2'


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
    </>
  )
}

export default App
