import React from 'react'
import { useState } from 'react' 
function HoHoHo (){
    const [numHo, setNumHos] = useState(0)
    const [hos, setHos] = useState([])
    function repetirHo(){
        let arrayHos = []
        for(let i = 1; i<=numHo; i++){
            if (i == numHo){
                arrayHos.push("Ho!")
                break
            }
            arrayHos.push("Ho")
        }
        setHos(arrayHos)
        console.log(hos)
    }
    return(
        <div>
            <h1>Repetidos de HoHoHos</h1>
            <input value={numHo} onChange={(e) => setNumHos(e.target.value)}></input>
            <button onClick={repetirHo}>Repetir Ho's</button>
            <p>{hos}</p>
                 
        </div>
    )
}

export default HoHoHo