import './App.css'
import AdivinheONumero from './components/AdivinheONumero.jsx'
import DiaDaSemana from './components/DiaDaSemana.jsx'
import CalculoAlbergue from "./components/CalculoAlbergue.jsx"
import Feira from './components/Feira.jsx'
import Voto from './components/Voto.jsx'
function App() {

  return (
    <>
      <h1>01-Componentes</h1>
      < Voto />
      <Feira />
      <CalculoAlbergue />
      <AdivinheONumero />
      <DiaDaSemana />
    </>
  )
}

export default App
