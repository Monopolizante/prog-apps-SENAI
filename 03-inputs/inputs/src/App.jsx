import { useState } from 'react'
import './App.css'
import CalculadoraDeNotas from './components/CalculadoraDeNotas';
import Bondinho from "./components/Bondinho"
import Pum from "./components/Pum"
import Pneu from "./components/Pneu"

function App() {
  

  return (
    <>
      <CalculadoraDeNotas />
      <Bondinho />
      <Pum />
      <Pneu />
    </>
  )
}

export default App
