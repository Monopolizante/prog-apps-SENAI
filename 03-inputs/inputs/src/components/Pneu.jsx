import React from 'react'
import { useState } from 'react'

function Pneu() {
    const [pressao, setPressao] = useState(0)
    const [bomba, setBomba] = useState(0)
    const [diferenca, setDiferenca] = useState(0)
    function calcularDiferenca(){
        if (pressao <= 1 || pressao >= 40 || bomba <= 1 || bomba >= 40){
            setDiferenca("Digite um valor válido")
            return
        }
        setDiferenca(pressao - bomba)
    }
    return (
        <div>
            <h1>Pneu</h1>
            <input value={pressao} type="number" onChange={(e) => setPressao(e.target.value)}></input>
            <input value={bomba} type="number" onChange={(e) => setBomba(e.target.value)}></input>
            <button onClick={calcularDiferenca}>Calcular Diferença</button>
            <p>{diferenca}</p>
        </div>
    )
}

export default Pneu
