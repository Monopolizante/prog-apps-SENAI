import React from 'react'
import { useState } from 'react'
function Pum() {
    const [pums, setPums] = useState("")
    const [numPums, setNumsPums] = useState(0)  
    function calcularPums(){
        let array = []
        let numLinhas = numPums * 4
        for(let i = 1; i<=numLinhas; i++ ){
            if (i % 4 != 0){
                array.push(i)
            } else{
                array.push("PUM")
            }
        }
        for(let i = 0 ; i<array.length; i+=4){
            let firstIndex = i+4        
            let actualSplice = array.slice(i, firstIndex)
            console.log(actualSplice.join(" "))
        }
        
    }
    return (
        <div>
            <h1>Pums</h1>   
            <input value={numPums} onChange={(e) => setNumsPums(Number(e.target.value))}></input>
            <button onClick={calcularPums}>Calcular Pums</button>
        </div>
    )
}

export default Pum
