export default function CardProduto(props) {
    return (
        <div className="card align-items-center">
            <div className="card-header w-100 text-center">
                <h5 className="card-title">{props.nome}</h5>
            </div>
            <img src={`${props.nome}.png`} className="card-img-top w-75 py-4" alt="..." />
            <div className="card-body text-center">
                <p className="card-text">{props.descricao}</p>
                <p className='fs-5'>R$ {props.preco}</p>
            </div>
            <div className="card-footer w-100 text-center">
                <h6 className="card-subtitle mb-2 text-success">{props.quantidade} unidade (s) em estoque</h6>
            </div>
        </div>
    )
}