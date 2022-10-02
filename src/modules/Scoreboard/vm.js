import React from "react";
import { useContext, createContext, useState, useEffect } from 'react';


const sbContext = createContext(null);

  const ScoreboardViewModel = () => {

    const [p1Name, setP1Name] = useState("abc");
    const [p2Name, setP2Name] = useState("");
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);


    const valueContext = {
        p1Name, p2Name, p1Score, p2Score
     };

     return (
      {sbContext, valueContext}
       
        );
   
  }


export  {ScoreboardViewModel};