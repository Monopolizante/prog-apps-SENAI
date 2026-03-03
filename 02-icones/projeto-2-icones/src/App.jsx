import { useState } from 'react'
import './App.css'
import Iconify from './components/Iconify.jsx';
import Tabuada from './components/Tabuada.jsx';
import Xerox from './components/Xerox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>02 - Ícones</h1>
      <Xerox />
      <Iconify />
      <Tabuada />
    </>
  )
}

export default App
