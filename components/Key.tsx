import React, {useContext} from 'react'
import { AppContext } from "../pages/index";
import { AppContext as ContextType } from "../lib/componentprops";
import App from '../pages/_app';

function Key( {keyVal, bigKey}: {keyVal: string; bigKey: boolean} ) {
  const { onSelectLetter, onDelete, onEnter} =  useContext<ContextType>(AppContext)
  const selectLetter = () => {
    if(keyVal === "ENTER"){
      onEnter();
    }
    else if(keyVal === "DELETE"){
      onDelete();
    }
    else{
      onSelectLetter(keyVal);
    }
  }
  return (
    <div className='key' id={bigKey ? "big" : ""} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key 