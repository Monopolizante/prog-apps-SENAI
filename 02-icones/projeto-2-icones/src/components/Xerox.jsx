import React from "react"
import { useState } from "react"

function Xerox(){
    const[preco, setPreco] = useState([])
    function mostrarPrecos(){
        let todosNums = []
        let resultado
        for (let i = 1; i <= 500; i++) {
            resultado = i * 0.33
            todosNums.push("\n" + `${i} = R$${resultado.toFixed(2)}`)
        }
        setPreco(todosNums)
    }
    return(
        <div>
            <h2>MJ-Xerox</h2>
            <ul>
                {preco.map((numero, index) => (
                    <li>{numero}</li>
                ))}
            </ul>
            <button onClick={mostrarPrecos}>Ver preços</button>
        </div>
        )
} 
    

export default Xerox