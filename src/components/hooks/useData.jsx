//----------------------------- Module 7: Exercise 2 ---------------------------

import { useReducer, useEffect } from "react";

const initialState = {
    price: 0,
    error: null,
  };

  function reducer(state, action) {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { price: action.payload, error: null };

        case "FETCH_ERROR":
            return { ...state, error: action.payload };

        default:
            return state;
    }
  }


function useData(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("running effect: BitcoinRates_Ex2");
    let ignore = false;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          const currency = url.slice(-3).toLowerCase();
          dispatch({ type: "FETCH_SUCCESS", payload: json.bitcoin[currency] });
        }
      })
      .catch((err) => {
        if (!ignore) {
          dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
      });

    return () => {
      ignore = true;
      console.log("cleanup effect: BitcoinRates_Ex2");
    };
  }, [url]);

  return state; //with reduce I am sending an object with price and error to the component
}

export default useData;
