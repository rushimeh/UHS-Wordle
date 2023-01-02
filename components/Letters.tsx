import React, {useContext}  from "react";
import { AppContext } from "../pages/index";
import { AppContext as ContextType } from "../lib/componentprops";

function Key({letterPos, attemptVal}: {letterPos: number; attemptVal: number}){
    const { board } = useContext<ContextType>(AppContext);
    const key = board[attemptVal][letterPos];
    return(
        <div className="letter">{key}</div>
    )
}

export default Key;