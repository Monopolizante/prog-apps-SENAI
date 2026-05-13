import React from 'react'
import './Card.css'
function Card(prop) { 
    // você poderia trocar o prop pela variavel que tu usou no map
    // e adicionar colchetes {prop} pra fazer com 
    // que ele venha desestruturado, aí tu pode só usar 
    // a variavel que tu mandou e o atributo
    // Tu também pode desfazer a própria variável que tu recebel assim:
    // const {atributoQueEuQuero1, atributoQueEuQuero2, atributoQueEuQuero3} = variavelRecebida
    return (
            <div className="cont-card">
                {prop.p.nome && <h3>{prop.p.nome}</h3>}
                {prop.p.origem && <h3>{prop.p.origem}</h3>}
                {prop.p.modelo &&<h3>{prop.p.modelo}</h3>}
                {prop.p.materia && <h3>{prop.p.materia}</h3>}
                <img src={prop.p.imagem}></img>
                {prop.p.raca && <h4>{prop.p.raca}</h4>}
                {prop.p.marca && <h4>{prop.p.marca}</h4>}
                {prop.p.família && <h4>{prop.p.família}</h4>}
                {prop.p.destino && <h4>{prop.p.destino}</h4>}
                {prop.p.nota && <h4>{prop.p.nota}</h4>}
                {prop.p.empresa && <h4>{prop.p.empresa}</h4>}
            </div>
    )
}

export default Card
