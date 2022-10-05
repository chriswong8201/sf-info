import React from "react";
import { useContext, createContext, useState, useEffect } from 'react';


const sbContext = createContext(null);

  const ScoreboardViewModel = () => {

    const [p1Name, setP1Name] = useState("abc");
    const [p2Name, setP2Name] = useState("");
    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [p1Flag, setP1Flag] = useState(0);
    const [p2Flag, setP2Flag] = useState(0);
    const [showMessage, setShowMessage] = useState(false);


    const setPlayerInfo = (data) => {
      setP1Name(data?.player1Name);
      setP2Name(data?.player2Name);
      setP1Score(data?.player1Score);
      setP2Score(data?.player2Score);
      setP1Flag(data?.player1Flag);
      setP2Flag(data?.player2Flag);
    }
    
    const valueContext = {
      setPlayerInfo,p1Flag, p2Flag,  p1Name, setP1Name, setP2Name, setP1Score, setP2Score, setP1Flag, setP2Flag,   p2Name, p1Score, p2Score, showMessage, setShowMessage
     };

     return (
      {sbContext, valueContext}
       
        );
   
  }


export  {ScoreboardViewModel};