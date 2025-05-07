//----------------------------- Module 7: Exercise 2 ---------------------------
import { useState } from "react";
import useData from "./hooks/useData";
import Emoji from  "./Emoji"

const currencies = [
    { code: "USD", symbol: "$" },   // US Dollar
    { code: "AUD", symbol: "A$" },  // Australian Dollar
    { code: "NZD", symbol: "NZ$" }, // New Zealand Dollar
    { code: "GBP", symbol: "£" },   // British Pound
    { code: "EUR", symbol: "€" },   // Euro
    { code: "SGD", symbol: "S$" }   // Singapore Dollar
];


function BitcoinRates_Ex3() {
  
    const [currency, setCurrency] = useState([currencies[0].code, currencies[0].symbol]);
   
    const {price, error} = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency[0]}`)
    // call custom hook useData every time 
    
    const options = currencies.map((curr) => (
        <option value={curr.code} key={curr.code}>
        {curr.code}
        </option>
    ));
  
    return (
        <div>
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select value={currency[0]} onChange={(e) => {
                    //gret the object inside the array currencies (contain code and symbol).
                    const selectedCurrency = currencies.find(c => c.code === e.target.value);
                    setCurrency([selectedCurrency.code, selectedCurrency.symbol])
                }
                }>
                    {options}
                </select>
            </label>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <p>Exchange in {currency[0]} = {price} {currency[1]} </p>
            )}

            <Emoji /> {/*second level child will use context*/}

        </div>
    );
}

export default BitcoinRates_Ex3;
