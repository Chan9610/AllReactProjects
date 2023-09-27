import React, { useState } from 'react'

function GetDomain() {
    const[domain,setDomain]=useState('');
    const[val,setVal]=useState('')
    
    function findomain(){

        let x = val.indexOf("@")+1;
        let y = val.indexOf(".");

        let result = val.substring(x,y)

        setDomain(result)
    }
  return (
    <div>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
        <button onClick={findomain}>Get Domain</button>

        <div>
        <p>{domain}</p>
        </div> 
    </div>
  )
}

export default GetDomain

