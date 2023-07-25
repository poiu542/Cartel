// import React from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

// export default App

import React from 'react'
// import logo from './logo.svg';
import './App.css'
// import SignIn from './SignIn';

function App(): React.ReactElement {
  return (
    <div className="App">
      te<code>asd </code>st
      {[1, 2, 3].map((x) => {
        const y = x + 1
        return x * y
      })}
      {/* <SignIn /> */}
    </div>
  )
}

export default App
