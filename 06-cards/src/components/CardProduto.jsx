import React from 'react'
import './CardProduto.css'
function CardProduto(prop) {
    return (
        <div className="cont-card">
            <h3 className="imagem-produto">{prop.p.imagem}</h3>
            <h3>{prop.p.nome}</h3>
            <h3>Valor R${prop.p.preco.toFixed(2).replace(".", ",")}</h3>
        </div>
    )
}

export default CardProduto
