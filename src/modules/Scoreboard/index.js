import React from "react";
import {useContext} from "react";
import {ScoreboardViewModel} from "./vm.js";
import Scoreboard from "./views/scoreboard";

const Index = () => {
    const {  
        sbContext, valueContext} = ScoreboardViewModel();
        const { p1Name } = sbContext;
        console.log({p1Name})
        console.log({sbContext, valueContext})

        return (
            <>
            <sbContext.Provider value={valueContext}>
                <Scoreboard context={sbContext}/>
        </sbContext.Provider>
        </>

        )
}

export default Index;