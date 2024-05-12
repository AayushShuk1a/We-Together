import React, { useEffect, useState } from "react";
import "./Quotes.scss";
import quotes from "./quotes.js";

const Quotes = () => {
  const [Quotes, setQuotes] = useState("");

  const RandomQuote = () => {
    setQuotes(quotes[Math.floor(Math.random() * quotes.length)].q);
  };

  useEffect(() => {
    let TempQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    setQuotes(TempQuotes.q);
  }, []);

  return (
    <div className="Wrapper">
      <div className="Inside">
        <div className="quotes">
          <img src="" alt="" />
          <h1>{Quotes}</h1>
        </div>
        <div className="buttons">
          <button onClick={RandomQuote}>Random Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;