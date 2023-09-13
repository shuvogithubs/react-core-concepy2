import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Counter'
import Player from './Player'
import Users from './User'
import Friends from './Friends'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>React Core 2</h2>
     <Counter></Counter>
     <Player></Player>
     <Users></Users>
     <Friends></Friends>
   

         
    </>
  )
}

export default App
