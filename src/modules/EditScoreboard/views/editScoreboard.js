import React from "react";
import {useContext} from "react";
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Input, Label, Button } from 'reactstrap'
import { HK } from 'country-flag-icons/react/3x2'
import { CSSTransition } from 'react-transition-group';
import './css/scoreboard.css'
import { Link } from "react-router-dom";


const EditScoreboard = ({context}) => {
    const {      submit, reset, setP1Name, setP2Name, setP1Score, setP2Score, setP1Flag, setP2Flag, p1Name, p2Name, p1Score, p2Score, p1Flag, p2Flag
    } = useContext(context);

    return <div>
            <div  className={`card`} > 
              <Row>
                <Col className="col-2">
                <Label>Player1 Flag</Label>
                <Input type="text"  value={p1Flag} onChange={(e) => {
                  setP1Flag(e.target.value)
                }}/>
                </Col>
                <Col >
                <Label>Player1 Name</Label>

                <Input type="text"  value={p1Name} onChange={(e) => {
                  setP1Name(e.target.value)
                }}/>
                </Col>
                <Col className="col-1" >
                <Label>Player1 Score</Label>

<Input type="text"  value={p1Score} onChange={(e) => {
  setP1Score(e.target.value)
}}/>
                </Col>
              </Row>
            </div>
            <div  className={`card`} > 

            <Row>
                <Col className="col-2">
                <Label>Player2 Flag</Label>
                <Input type="text" value={p2Flag} onChange={(e) => {
                  setP2Flag(e.target.value)
                }}/>
                </Col>
                <Col >
                <Label>Player2 Name</Label>

                <Input type="text" value={p2Name} onChange={(e) => {
                  setP2Name(e.target.value)
                }}/>
                </Col>
                <Col className="col-1" >
                <Label>Player2 Score</Label>

<Input type="text" value={p2Score} onChange={(e) => {
  setP2Score(e.target.value)
}}/>
                </Col>
              </Row>

              <Button className="mb-2 mt-2" onClick={ () => reset()}> reset</Button>
              <Button onClick={submit}> submit</Button>

              <a target="_blank" href={"https://catamphetamine.gitlab.io/country-flag-icons/3x2/"}>
country code ref: https://catamphetamine.gitlab.io/country-flag-icons/3x2/</a>
            </div>
          </div>
}

export default EditScoreboard;