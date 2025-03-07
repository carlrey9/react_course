import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card1 from '../components/card'

function App() {
  const items = ["react", "Javascript", "Vite"];

  return (
    <section>
      <h1>Hola Carlos</h1>
      <Card1 title="Card 1" description="Description" />
      <Card1 title="Card 2" description="Description 2" />
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
