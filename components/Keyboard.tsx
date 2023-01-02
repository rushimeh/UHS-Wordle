import React, {useCallback, useEffect, useContext} from 'react'
import Key from './Key'
import { AppContext } from "../pages/index";
import { AppContext as ContextType } from '../lib/componentprops'

function Keyboard() {
  const {onSelectLetter, onEnter, onDelete} = useContext<ContextType>(AppContext)
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
      FIRST_ROW.forEach((key) =>{
        if(event.key.toLowerCase() === key.toLowerCase() ){
          onSelectLetter(key);
        }

      });
      SECOND_ROW.forEach((key) =>{
        if(event.key.toLowerCase()  === key.toLowerCase() ){
          onSelectLetter(key);
        }

      });
      THIRD_ROW.forEach((key) =>{
        if(event.key.toLowerCase()  === key.toLowerCase() ){
          onSelectLetter(key);
        };

      })
    }
  }, [])
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
          return <Key key={key} keyVal={key} bigKey = {false}/>;
        })}
      </div>
      <div className='line2'>
      {SECOND_ROW.map((key) =>{
          return <Key key={key} keyVal={key} bigKey={false}/>;
        })}
      </div>
      <div className='line3'>
      <Key keyVal={"ENTER"} bigKey={true}/>
      {THIRD_ROW.map((key) =>{
          return <Key key={key} keyVal={key} bigKey = {false}/>;
        })}
      <Key keyVal={"DELETE"} bigKey = {true}/>
      </div>
    </div>
  )
}

export default Keyboard