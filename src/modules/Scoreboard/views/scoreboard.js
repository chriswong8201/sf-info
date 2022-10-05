import React from "react";
import {useContext} from "react";
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row } from 'reactstrap'
import * as Flags from 'country-flag-icons/react/3x2'
import { CSSTransition } from 'react-transition-group';
import './css/scoreboard.css'
const Scoreboard = ({context}) => {
    const {      
        p1Flag, 
        p2Flag, 
         p1Name, 
         setP1Name, 
         setP2Name,
         setP1Score,
         setP2Score, 
         setP1Flag, 
        setP2Flag,   
        p2Name, 
        p1Score, 
        p2Score, 
        showMessage,
        setShowMessage,
        setPlayerInfo,
    } = useContext(context);

    
    useEffect(() => {

       
       
        setInterval( () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://54.169.134.160/getScore', requestOptions)
                .then(response => response.json())
                .then(data => setPlayerInfo(data)
                    );
    
        
        }, 5000)
      }, [])

  
      useEffect(() => {
        setShowMessage(false)
        
        setTimeout(() => {
            setShowMessage(true)
        }, [500])
      }, [ p1Flag, 
        p2Flag, 
         p1Name, 
        p2Name, 
        p1Score, 
        p2Score,])

    
    return <CSSTransition
    in={showMessage}
       classNames="fade"
       timeout={11000}
       unmountOnExit
       appear={showMessage}
    >
            <div>
          <Row>
            <Col>
           
            <div  className={`card custom-card ${p1Name && "card-opacity"}`} > 
              <Row>
                <Col className="col-2 flag-container">
                <img
  alt="United States"
  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${p1Flag}.svg`}
  style={{width:"auto", height:"30px "}}/>
                </Col>
                <Col className="d-flex justify-content-center align-items-center player-container">
                  <span className="player-name">{p1Name}</span>
                </Col>
                <Col className="col-1 score left-border" >
                  <span> {p1Score} </span>
                </Col>
              </Row>
            </div>
            </Col>
            <Col>
           
           <div  className={`card custom-card ${p2Name && "card-opacity"}`} > 
             <Row>
               <Col className="col-2 flag-container">
               <img
  alt="United States"
  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${p2Flag}.svg`}
  style={{width:"auto", height:"30px "}}/>
               </Col>
               <Col className="d-flex justify-content-center align-items-center player-container">
                 <span className="player-name">{p2Name}</span>
               </Col>
               <Col className="col-1 score left-border" >
               <span> {p2Score} </span>
               </Col>
             </Row>
           </div>
           </Col>
          </Row>
          </div>
          </CSSTransition>
}

export default Scoreboard;