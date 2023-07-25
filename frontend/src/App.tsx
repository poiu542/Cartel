import React from 'react'
import './App.css'
import Button from './components/Button'

function App(): React.ReactElement {
  const handleClick = () => {
    alert('버튼클릭')
  }
  return (
    <div className="App">
      <Button
        radius="10%"
        width="200px"
        height="200px"
        background="blue"
        color="black"
        text="버튼"
        onClick={handleClick}
      />
    </div>
  )
}

export default App
