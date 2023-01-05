import React, {useContext} from 'react'
import { AppContext } from "../pages/index";
import { AppContext as ContextType } from "../lib/componentprops";
import App from '../pages/_app';

function Key ( {keyVal, bigKey, disabled}: {keyVal: string; bigKey: boolean; disabled: boolean} ) {
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

  const tempId = () => {
    if(bigKey){
      return "big"
    }
    else if (disabled){
      return "disabled"
    }
  }

  return (
    <div className='key' id={tempId()} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key 