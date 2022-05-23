import React from 'react'
import { useState } from 'react'
import './App.css';

const App = () => {
  const [value, setValue] = useState(10)
  
  const Display = (props) => <div>{props.value}</div>

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }
  
  return (
    <div>
      <div id="logo">
        <img src="Logo_001.svg" alt="logo"/>
      </div>
      <div id="counter">
      {value}&#160;&#160;
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
      </div>




    </div>
  )
}
export default App