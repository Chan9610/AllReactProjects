import React from 'react'
import ReactDOM from 'react-dom/client'
import ColourChange from './ColourChange/ColourChange'
import Todolist from './todoList/Todolist'
import ChangeTextSize from './ChangeTextSize/ChangeTextSize'
import GetDomain from './GetDomain/GetDomain'
import Toggle from './Toggle/Toggle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ColourChange/> */}
    {/* <Todolist/> */}
    {/* <ChangeTextSize/> */}
    {/* <GetDomain/> */}
    <Toggle/>
  </React.StrictMode>,
)
