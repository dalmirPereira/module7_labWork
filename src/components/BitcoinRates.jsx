//----------------------------- Module 7: Exercise 1 ---------------------------
import { useState, useEffect } from "react";

const currencies = [
    { code: "USD", symbol: "$" },   // US Dollar
    { code: "AUD", symbol: "A$" },  // Australian Dollar
    { code: "NZD", symbol: "NZ$" }, // New Zealand Dollar
    { code: "GBP", symbol: "£" },   // British Pound
    { code: "EUR", symbol: "€" },   // Euro
    { code: "SGD", symbol: "S$" }   // Singapore Dollar
];

function BitcoinRates() {
  
    const [currency, setCurrency] = useState([currencies[0].code, currencies[0].symbol]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        console.log("running effect: BitcoinRates");
        let ignore = false; // flag to allow ignoring of the fetch result
    
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency[0]}`)
            .then((response) => response.json())
            .then((json) => {
                if (!ignore) {
                    const price = json.bitcoin[currency[0].toLowerCase()];
                    setPrice(price); //set up bitcoin price based on the currency chosen.

                };
            });
    
        // cleanup function - runs when unmounted or dependencies change
        return () => {
            ignore = true; // ignore now invalid fetch results
            console.log("cleanup effect: BitcoinRates");
        };
        }, [currency]); // every time currency is updated it will use the effect.
    
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
                    setCurrency([selectedCurrency.code, selectedCurrency.symbol])}
                }>
                    {options}
                </select>
            </label>
            <p>Exchange in {currency[0]} = {price} {currency[1]} </p>
        </div>
    );
}

export default BitcoinRates;
