import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Chai from "./first.jsx"
//function returning html
function App() {
  const [count, setCount] = useState(0)

  return (
    // <h1>hello</h1>
    <>
      <Chai/>
      <h1>hello meow meow</h1>
    </>
  )
}

export default App
