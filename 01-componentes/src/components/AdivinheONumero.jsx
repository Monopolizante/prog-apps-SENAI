import React from 'react'
function adivinharNumero(){
    let numeroAleatorio = Math.floor((Math.random() * 6) +1)
    console.log(numeroAleatorio)
    let numeroAdivinhado = Number(prompt("Adivinhe um número entre 1 a 5"))
    if (numeroAdivinhado == numeroAleatorio) {
        alert("Você acertou!")
    } else {
        alert("Você errou")
    }
}
function AdivinheONumero() {
  return (
      <div>
        <h2>Adivinhe o número</h2>
        <button onClick={adivinharNumero}>Adivinhar o número</button>
      </div>
    )
}

export default AdivinheONumero