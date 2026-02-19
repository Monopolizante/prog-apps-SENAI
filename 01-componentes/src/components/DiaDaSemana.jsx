import React from 'react'
function verificarDia(){
    let diasDaSemana = ["Domingo" , "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ]
    let dia = Number(prompt("Escolha um número entre 1 a 7"))
    if (dia > 7 || dia < 1){
        alert("Não existe um dia da semana com esse número")
        return
    }
    alert(`O dia da semana é ${diasDaSemana[dia-1]}`)
}
function DiaDaSemana() {
  return (
    <div>
        <h2>Dia da Semana</h2>
            <button onClick={verificarDia}>Verificar Dia</button>
    </div>
  )
}

export default DiaDaSemana