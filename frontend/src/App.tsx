import React from 'react'
import './App.css'
import Button from './components/Button'
import NavbarLogin from './components/NavbarLogin'

function App(): React.ReactElement {
  const handleClick = () => {
    alert('버튼클릭')
  }
  return (
    <div className="App">
      {/* <Button
        border={{ radius: '0.625rem', borderColor: '#40BFFF' }}
        size={{ width: '100px', height: '100px' }}
        color={{ background: '#40BFFF', color: 'white' }}
        text="버튼"
        onClick={handleClick}
      /> */}
      <NavbarLogin />
    </div>
  )
}

export default App
