import { useState } from 'react'

import './App.css'
import Home from "./Pages/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className={"cont-app"}>
      <header>
        <nav>Barra de navegação</nav>
      </header>
      <main className={"cont-main"}>
        <Home />
      </main>
    </div>
    </>
  )
}

export default App
