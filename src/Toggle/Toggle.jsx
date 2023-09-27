import React, { useState } from 'react'

function Toggle() {
  function Show(){
    const[text,setText]=useState('');



    setText(text)



  }
  function Hide(){
    const[text,setText]=useState(0);

    

    setText(text)
    
  }
  return (
    <div>
        <button onClick={Show}>Show</button> <button onClick={Hide}>Hide</button>
        <p style={{}}>This text can be change if you click on the above button</p>
        
    </div>
  )
}

export default Toggle