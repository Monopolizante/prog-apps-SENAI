import { useState } from 'react'

import './App.css'
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import Produtos from "./Pages/Produtos"

function App() {
  const[tela, setTela] = useState(<Home />)

  return (
    <>
    <div className={"cont-app"}>
      <header>
        <nav>Barra de navegação
          <hr></hr>
          <div className={"botoes"}>
            <button onClick={() => setTela(<Home />)}>Home</button>
            <button onClick={() => setTela(<Sobre />)}>Sobre</button>
            <button onClick={() => setTela(<Produtos />)}>Produtos</button>
          </div>
        </nav>
        
      </header>
      <main className={"cont-main"}>
        {tela}
      </main>
    </div>
    </>
  )
}

export default App
