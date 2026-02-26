import React from 'react'
import { useState } from 'react'

function Feira (){

    const[saida, setSaida] = useState('')

    function calcularPreco(){
        let qnt = Number(prompt("Digite a quantidade de maçãs"))
        let preco
        if(qnt < 12){
            preco = qnt * 0.30
        } else if (qnt >=12){
            preco = qnt * 0.25
        }
        setSaida(`resultado: R$${preco}`)
    }
    return (
        <div>
            <h2>Feira</h2>
            <button onClick={calcularPreco}>Calcular Maçãs</button>
            <p>
                 {saida}
            </p>
        </div>
    )
}
export default Feira