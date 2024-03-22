"use client";

import { useState, useEffect } from "react";
import "./Trusted.css";




function Trusted() {
  const [country, setCountry] = useState("england");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`)
      .then((response) => response.json())
      .then((json) => {
        const items = Array.isArray(json) ? json : [json];
        console.log(items); 
        setItems(items); 
      });
  }, [country]);
  

  return (
    <section className="trusted">
      <h1>Trusted.</h1>
      <p className="trusted-para">
        We have got thousands of happy customers all over the UK. Choose your
        country to see the latest review:
      </p>
      <div className="button-container">
        <button onClick={() => setCountry("england")} type="button">England</button>
        <button onClick={() => setCountry("wales")} type="button">Wales</button>
        <button onClick={() => setCountry("scotland")} type="button">Scotland</button>
      </div>
      {items.map((item, index) => {
  console.log(item);
  return (
    <div key={index}>
      <h2>{item.author}</h2>
      <p>{item.text}</p>
    </div>
  );
})}


    </section>
  );
}

export default Trusted;
