import './App.css'
import Exercises from './components/Exercises'
import BitcoinRates from './components/BitcoinRates'


function App() {

  return (
    <>
      <div className="exerciseBox">
        <Exercises name="Exercise 1" />
        <BitcoinRates />
      </div>
    </>
  )
}

export default App
