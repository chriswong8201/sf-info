import logo from './logo.svg';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row } from 'reactstrap'
import { HK } from 'country-flag-icons/react/3x2'
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Scoreboard from '../src/modules/Scoreboard';
import EditScoreboard from '../src/modules/EditScoreboard';
import { BrowserRouter, Routes, Route, Navigate , useLocation } from 'react-router-dom';
const App = () => {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>

       
         

         <Route path="/" element={<Navigate replace to="/scoreboard" />} />
          <Route path={`${process.env.PUBLIC_URL}/scoreboard`}
            element={ <Scoreboard  />}
          />

<Route path={`${process.env.PUBLIC_URL}/edit-scoreboard`}
            element={ <EditScoreboard />}
          />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
