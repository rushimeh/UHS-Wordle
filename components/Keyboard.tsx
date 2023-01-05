import React, {useCallback, useEffect, useContext} from 'react'
import Key from './Key'
import { AppContext } from "../pages/index";
import { AppContext as ContextType } from '../lib/componentprops'

function Keyboard() {
  const {onSelectLetter, onEnter, onDelete, currAttempt, disabledLetters} = useContext<any>(AppContext)
  const FIRST_ROW = ['Q','W','E','R','T','Y','U','I','O','P']
  const SECOND_ROW = ['A','S','D','F','G','H','J','K','L']
  const THIRD_ROW = ['Z','X','C','V','B','N','M']

  const handleKeyboard = useCallback((event: any) => {
    if(event.key === "Enter"){
      onEnter();
    }
    else if(event.key === "Backspace"){
      onDelete();
    }
    else{
      FIRST_ROW.forEach((key1) =>{
        if(event.key.toLowerCase() === key1.toLowerCase() ){
          onSelectLetter(key1);
        }

      });
      SECOND_ROW.forEach((key1) =>{
        if(event.key.toLowerCase()  === key1.toLowerCase() ){
          onSelectLetter(key1);
        }

      });
      THIRD_ROW.forEach((key1) =>{
        if(event.key.toLowerCase()  === key1.toLowerCase() ){
          onSelectLetter(key1);
        };

      });
    }
  }, 
  [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };  
  }, [handleKeyboard])
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className='line1'>
        {FIRST_ROW.map((key) =>{
          return <Key key={key} keyVal={key} bigKey = {false} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className='line2'>
      {SECOND_ROW.map((key) =>{
          return <Key key={key} keyVal={key} bigKey={false} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className='line3'>
      <Key keyVal={"ENTER"} bigKey={true} disabled = {false}/>
      {THIRD_ROW.map((key) =>{
          return <Key key={key} keyVal={key} bigKey = {false} disabled={disabledLetters.includes(key)}/>;
        })}
      <Key keyVal={"DELETE"} bigKey = {true} disabled = {false}/> 
      </div>
    </div>

    
    //hopefully disabled should be autoset to false at keyVals "ENTER" and "DELETE"
  )
}

export default Keyboard