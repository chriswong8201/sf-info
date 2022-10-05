import React from "react";
import { useContext, createContext, useState, useEffect } from 'react';


const sbContext = createContext(null);

  const EditScoreboardViewModel = () => {

    const [p1Name, setP1Name] = useState("");
    const [p2Name, setP2Name] = useState("");
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [p1Flag, setP1Flag] = useState("HK");
    const [p2Flag, setP2Flag] = useState("HK");

    const submit = () => {
      const requestOptions = {
        method: 'PUT',
        headers: { Accept: "application/json, text/plain, /", 'Content-Type': 'application/json' },
        body: JSON.stringify({
          player1Flag: p1Flag.toUpperCase(),
          player2Flag: p2Flag.toUpperCase(),
          player1Name: p1Name,
          player2Name: p2Name,
          player1Score: p1Score,
          player2Score: p2Score,
      })
    };

    console.log({requestOptions})
         fetch('http://54.169.134.160/updateScore', requestOptions)
      
        /* fetch('http://localhost:8000/updateScore', requestOptions) */
        .then(response => response.json())
        .then(data => console.log({data}))
        .catch((err) => {
          console.log({err})
        })
    }


    const reset = () => {
      setP1Flag("HK")
      setP2Flag("HK")
      setP1Name("")
      setP2Name("")
      setP1Score(0)
      setP2Score(0)
    }


    const valueContext = {
      submit, reset, setP1Name, setP2Name, setP1Score, setP2Score, setP1Flag, setP2Flag, p1Name, p2Name, p1Score, p2Score, p1Flag, p2Flag
     };

     return (
      {sbContext, valueContext}
       
        );
   
  }


export  {EditScoreboardViewModel};