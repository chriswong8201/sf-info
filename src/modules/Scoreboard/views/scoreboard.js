import React from "react";
import {useContext} from "react";

const Scoreboard = ({context}) => {
    const {p1Name} = useContext(context);

    return <div>{p1Name}</div>
}

export default Scoreboard;