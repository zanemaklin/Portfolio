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
      <div class="logo">
        <img src="Logo_001.svg" alt="logo"/>
      </div>
      <div>
      <p class = "Welcome"> Hello And Welcome!</p>
      <p class = "Construction">You are a bit early this site is still under construction!</p>
      </div>
    </div>
  )
}
export default App