import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaticComponent from './components/StaticComponent/StaticComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StaticComponent />
    </>
  )
}

export default App
