import React, {useContext, useEffect}  from "react";
import { AppContext } from "../pages/index";
import { AppContext as ContextType } from "../lib/componentprops";


    
function Key({letterPos, attemptVal}: {letterPos: number; attemptVal: number}){
    const { board, correctWord, currAttempt, disabledLetters, setDisabledLetter } = useContext<any>(AppContext)
    const key = board[attemptVal][letterPos];
  

    const correct = correctWord[letterPos] === key
    const almost = !correct && key !== "" && correctWord.includes(key);

    
    const getLetterState = () => {
        if(currAttempt.attempt > attemptVal){
            const tempState = correct ? "correct": almost ? "almost" : "error"
            return tempState;
        }
    }

    const letterState = getLetterState()

    useEffect(() => {
        if(key !== "" && !correct && !almost){
            setDisabledLetter((prev:any) => [...prev, key]);
        }
    }, [currAttempt.attempt]);


    return(
        <div className="letter" id ={letterState}>{key}</div>
    )
}

export default Key;