import React from 'react'
import { useState } from 'react'

function CalculadoraDeNotas() {
    const [primeiraNota, setPrimeiraNota] = useState("")
    const [segundaNota, setSegundaNota] = useState("")
    const [mediaNota, setMediaNota] = useState("")
    function calcularNota(){
        let total = Number(primeiraNota) + Number(segundaNota)
        let media = total / 2
        console.log(media)
        /* media >= 7 ? setMediaNota("Você foi aprovado") : setMediaNota("Você foi reprovado") */
        if (media >= 7) {
            setMediaNota("Você foi aprovado")
        } else if (media < 7 && media >= 4) {
            setMediaNota("Você está na recuperação")
        }else {
            setMediaNota("Você foi reprovado")
        }
    }
    return (
        <div>
            <h1>Calculadora de Notas</h1>
            <input type="number" placeholder="Nota 1" value={primeiraNota} onChange={((e) => setPrimeiraNota(e.target.value))}></input>
            <br></br>
            <input type="number" placeholder="Nota 2" value={segundaNota} onChange={((e) => setSegundaNota(e.target.value))}></input>
            <br></br>
            <button onClick={calcularNota}>Calcular Nota</button>
            <strong>{mediaNota}</strong>
        </div>
    )
}

export default CalculadoraDeNotas
