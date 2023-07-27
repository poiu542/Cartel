import React, { ChangeEvent, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App(): React.ReactElement {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  return <div className="App">우린약하지않아</div>
}

export default App
