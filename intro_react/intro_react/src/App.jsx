import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = ["react", "Javascript", "Vite"];

  return (
    <section>
      <h1>Hola Carlos</h1>
      <ul>
        {
          items.map((item, index) =>
          (
            <li>{item}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default App
