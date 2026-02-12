import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Corpo />
      <h1>aura+ego</h1>
    </>
  )
}

export default App
