import React from "react";
import {useContext} from "react";
import {EditScoreboardViewModel} from "./vm.js";
import EditScoreboard from "./views/editScoreboard";

const Index = () => {
    const {  
        sbContext, valueContext} = EditScoreboardViewModel();

        return (
            <>
            <sbContext.Provider value={valueContext}>
                <EditScoreboard context={sbContext}/>
        </sbContext.Provider>
        </>

        )
}

export default Index;