export default function produto() {
    <div className="row">
        {dados.map(item => (
            <div key={item.id} className="produto col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <img src="book.png" className="card-img-top" alt="livro" />
                        <h5 className="card-title">{item.nome}</h5>
                        <p className="card-text">Descrição: {item.descricao}</p>
                        <p className="card-text">Preço: R${item.preco}</p>
                        <p className="card-text">Quantidade: {item.quantidade}</p>
                        <a href="#" className="btn btn-primary">Ver produto</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
}