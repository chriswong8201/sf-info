import React from "react";
import {useContext} from "react";
import {ScoreboardViewModel} from "./vm.js";
import Scoreboard from "./views/scoreboard";

const Index = () => {
    const {  
        sbContext, valueContext} = ScoreboardViewModel();
        return (
            <>
            <sbContext.Provider value={valueContext}>
                <Scoreboard context={sbContext}/>
        </sbContext.Provider>
        </>

        )
}

export default Index;