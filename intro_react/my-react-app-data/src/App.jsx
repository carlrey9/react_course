import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StaticComponent from './components/StaticComponent/StaticComponent'
import UserList from "./components/UserList/UserList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList />
    </>
  )
}

export default App
