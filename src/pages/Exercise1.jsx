import '../App.css'
import Exercises from '../components/Exercises'
import BitcoinRates from '../components/BitcoinRates'


function Exercise1() {

  return (
    <>
      <div className="exerciseBox">
        <Exercises name="Exercise 1" />
        <BitcoinRates />
      </div>
    </>
  )
}

export default Exercise1
