import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card() {
    const [dados, setDados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/dados');
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleNomeChange = (event) => setNome(event.target.value);
    const handleDescricaoChange = (event) => setDescricao(event.target.value);
    const handlePrecoChange = (event) => setPreco(event.target.value);
    const handleQuantidadeChange = (event) => setQuantidade(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const novoProduto = { nome, descricao, preco, quantidade };

        try {
            const response = await axios.post('/api/dados', novoProduto);
            setDados([...dados, response.data]); // Adiciona o novo produto ao estado
            setNome('');
            setDescricao('');
            setPreco('');
            setQuantidade('');
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
        }
    };

    const filteredDados = dados.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="d-flex justify-content-center">
                <button id='btn_cadastrar' onClick={cadastrarProduto} className='btn btn-dark'>Cadastrar Produto</button>
            </div>
            <div className="d-flex justify-content-center">
                <form id='form' onSubmit={handleSubmit} className="w-25">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={nome}
                            onChange={handleNomeChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <input
                            type="text"
                            className="form-control"
                            id="descricao"
                            value={descricao}
                            onChange={handleDescricaoChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preco">Preço</label>
                        <input
                            type="number"
                            className="form-control"
                            id="preco"
                            value={preco}
                            onChange={handlePrecoChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantidade"
                            value={quantidade}
                            onChange={handleQuantidadeChange}
                        />
                    </div>
                    <div className="d-flex justify-content-center"><button type="submit" onClick={esconder} className="btn btn-dark m-4">Cadastrar Produto</button></div>
                </form>
            </div>
            <div className="d-flex justify-content-center align-items-center m-5">
                <img src="lupa.png" alt="lupa" />
                <input
                    name='pesquisar'
                    className="form-control mr-sm-2 mb-4 w-25 m-3"
                    type="search"
                    placeholder="Pesquise aqui..."
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="row">
                {filteredDados.map(item => (
                    <div key={item.id} className="produto col-md-3 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="m-2 d-flex w-100 justify-content-center align-items-start">
                                    <h5 className="card-title text-break">{item.nome}</h5>
                                    <div className='d-flex justify-content-end'>
                                        <img src="trash.png" alt="lixo" />
                                        <img src="pencil.png" alt="lápis" />
                                    </div>
                                </div>
                                <p className="card-text text-break">Descrição: {item.descricao}</p>
                                <p className="card-text">Preço: R${item.preco}</p>
                                <p className="card-text">Quantidade: {item.quantidade}</p>
                                <a href="/produto" className="btn btn-dark">Ver produto</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function cadastrarProduto() {
    const btn = document.getElementById('btn_cadastrar')
    const form = document.getElementById('form')
    btn.style.display === "none"
    form.style.display === "block"
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block"
    } else {
        form.style.display = "none"
    }
    
}

function esconder() {
    const btn = document.getElementById('btn_cadastrar')
    if (btn.style.display === "none") {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}