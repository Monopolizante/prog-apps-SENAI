import React from 'react'
function soma(num1, num2){
    return num1 + num2
}
function subtracao(num1, num2){
    return num1 - num2
}
function multiplicacao(num1, num2){
    return num1 * num2
}
function divisao(num1, num2){
    return num1 / num2
}
// calculadore (1, 2, soma)
function calcular(){
    let fNum = Number(prompt("Primeiro número"))
    let sNum = Number(prompt("Segundo número"))
    let funcao = Number(prompt("Escolha por número: 1-soma, 2-subtracao, 3-multiplicacao, 4-divisao"))
    calculadora(fNum, sNum, funcao)
}
function calculadora(num1, num2, operador){
    alert(operador(num1, num2))
}
function CalculadoraSimples (){
    return (
        <div>
            <h2>Calculadora Simples</h2>
            <button onClick={calcular}>Calcular</button>
        </div>
    )
}
export default CalculadoraSimples