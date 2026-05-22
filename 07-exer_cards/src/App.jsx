import { useState } from 'react'


function App() {
  const [devedores, setDevedores] = useState([])
  const [inputFoto, setInputFoto] = useState("") 
  const [inputNome, setInputNome] = useState("")
  function cadastrarDevedor(){
    const novoDevedor ={
      foto: inputFoto,
      nome: inputNome
    }
    setDevedores([...devedores, novoDevedor])
    console.log(devedores)
  }
  return (
    <>
    <div className={"main-div"}>
      <h1>Cadastro do Agiota</h1>
      <label for="barra-foto">Foto</label>
      <input name="barra-foto" type="text" value={inputFoto} onChange={((e) => setInputFoto(e.target.value))}></input>
      <input type="text" value={inputNome} onChange={(e) => setInputNome(e.target.value)} ></input>
      <button onClick={cadastrarDevedor}>Cadastrar Devedor</button>    
    </div>
    <div className={"devedores-div"}>
      {devedores.map((item, index) => (
        <p key={index}>{item.nome} -- {item.foto}</p>
      ))}
    </div>  
    </>
  )
}
export default App
