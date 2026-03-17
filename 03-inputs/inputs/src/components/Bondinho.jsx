import React from "react"
import {useState} from 'react'

function Bondinho(){
    const [qntAlunos, setQntAlunos] = useState(0)
    const [qntMonitores, setQntMonitores] = useState(0)
    const [permissao, setPermissao] = useState("")
    function verificadorDePeso(){
        let totalDePessoas = qntAlunos + qntMonitores
        if (totalDePessoas > 50) {
            setPermissao("N")
        } else if (totalDePessoas < 1){
            setPermissao("Digite um número de pessoas válido")
        } else {
            setPermissao("S")
        }
    }
    return(
        <div>
            <h1>Bondinho</h1>
            <label >Quantidade de Alunos</label>
            <input type="number" value={qntAlunos} onChange={(e) => setQntAlunos(Number(e.target.value))}/>
            <br></br>
            <label>Quantidade de Monitores</label>
            <input type="number" value={qntMonitores} onChange={(e) => setQntMonitores(Number(e.target.value))}/>
            <br></br>
            <button onClick={verificadorDePeso}>Verificar Peso</button>
            <p>{permissao}</p>
        </div>
    )
}
export default Bondinho