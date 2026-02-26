import React from 'react'
import { useState } from 'react'

function CalculoAlbergue(){
    const[resultado, setResultado] = useState("") // define os estados para mudarem
    function calculoDias(){
        let preco
        let desconto = 25
        let numDias = prompt("Quantos dias você irá ficar?")
        if (numDias < 5) {
            preco = 100
        } else if (numDias >=6 && numDias <= 10){
            preco = 90
        } else if(numDias >=11){
            preco = 80
        }
        let valorTotal = ((desconto *(numDias * preco)) / 100) + 150
        setResultado(`Valor total: R$${valorTotal}`)
    }
    return (
        <div>
            <h2>Calcular Diária</h2>
            <button onClick={calculoDias}>Calcular Diaria</button>
            <p>{resultado}</p>
        </div>
    )   
}

export default CalculoAlbergue