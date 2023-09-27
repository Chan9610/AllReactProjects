import React, { useState } from 'react'

function ChangeTextSize() {
    const[text,setText]=useState(16)
    function Increment(){

        let Inctext = (text+2)
        setText(Inctext);
    }

    function Decrement(){

        let Dectext = (text-2)
        setText(Dectext);
    }
    function Reset(){
        let Initext = (16)
        setText(Initext);

    }


  return (
    <>

    <button onClick={Increment}>Increment</button>
    <p style={{fontSize:text}}>This is the sample text</p>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    
    
    </>
  )
}

export default ChangeTextSize