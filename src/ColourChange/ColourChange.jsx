import React, { useState } from 'react'



function ColourChange() {
    const [colour,setColour]=useState("red");

    let newColor = (colour) == "red"? "blue":"red";
    function Clrchange() {
        setColour(newColor)
        
    }
  return (
    <>     
    <div style={{backgroundColor:colour,height:"200px",width:"200px"}}>ColourChange</div>
    <button onClick={Clrchange}>Change Colour</button>
    </>

  )
}

export default ColourChange 
