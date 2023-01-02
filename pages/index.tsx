import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, createContext } from "react";
import Keyboard from "../components/Keyboard";
import GameBoard from "../components/GameBoard";
import { boardDefault } from "../words";
import { AppContext as ContextType } from "../lib/componentprops";

export const AppContext = createContext<any>({
  board: boardDefault, 
  setBoard: () => null, 
  setCurrAttempt: () => null, 
  onSelectLetter: (keyVal: string) => null,
  onEnter: () => null,
  onDelete: () => null})

function Home() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

  const onSelectLetter = (keyVal: string) => {
    if(currAttempt.letterPos > 4) return;
      console.log(currAttempt.letterPos)
      console.log(keyVal);
      const newBoard = [...board]
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }

  const onDelete = () => {
    console.log(currAttempt.letterPos);
    if(currAttempt.letterPos === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard)
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
  }

  const onEnter = () => {
    console.log(currAttempt.letterPos);
    if(currAttempt.letterPos !==5) return;
      setCurrAttempt({attempt: currAttempt.attempt + 1,  letterPos: 0})
  }
  return (
    <>
    <Head>
      <title>Wordle</title>
    </Head>

    <nav>
      <h1>Wordle</h1>
    </nav>
    <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onEnter, onDelete}}>
      <div className="game">
        <GameBoard />
        <Keyboard />
      </div>
    </AppContext.Provider>

    </>
  );
}

export default Home;
