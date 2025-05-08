import '../App.css'
import Exercises from '../components/Exercises'
import BitcoinRates_Ex3 from '../components/BitcoinRates_Ex3'
import { EmojiProvider } from '../components/contex/EmojiContex'

function Exercise3() {

  return (
    <>
      <div className="exerciseBox">
          <Exercises name="Exercise 3" />
          <EmojiProvider>
            <BitcoinRates_Ex3 />
          </EmojiProvider>
      </div>
      
    </>
  )
}

export default Exercise3
