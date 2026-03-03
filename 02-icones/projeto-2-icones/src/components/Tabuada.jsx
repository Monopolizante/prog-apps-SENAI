import React from "react"
import { useState } from "react"

function Tabuada(){
    const[tabuada, setTabuada] = useState([])
    function mostrarTabuada(){
        let todosNums = []
        let resultado
        let num = prompt("Digite um número")
        for (let i = 1; i <= 10; i++) {
            resultado = num * i
            todosNums.push(`${num} x ${i} = ${resultado}`)
        }
        setTabuada(todosNums)
    }
    return(
        <div>
            <h2>MJ</h2>
            <ul>
                {tabuada.map((numero, index) =>(
                    <li>{numero}</li>
                ))}
            </ul>
            <button onClick={mostrarTabuada}>Tabuada</button>
        </div>
        )
} 
    

export default Tabuada