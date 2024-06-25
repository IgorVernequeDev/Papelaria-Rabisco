import React, { useState } from 'react';
import CardProdutos from '@/components/CardProdutos';
import Link from 'next/link';

export default function CardList({ produtos }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProdutos = produtos.filter(produto =>
        produto.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className='mt-4'>
            <div className="d-flex justify-content-center align-items-center mb-5 w-100">
                <img src="lupa.png" alt="lupa" />
                <input
                    name='pesquisar'
                    className="form-control mr-sm-2 w-25 mb-4 m-3"
                    type="search"
                    placeholder="Pesquise aqui..."
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className='row d-flex justify-content-around'>
                {filteredProdutos.length > 0 ? (
                    filteredProdutos.map((produto, index) => (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={index}>
                            <CardProdutos
                                nome={produto.nome}
                                descricao={produto.descricao}
                                preco={produto.preco}
                                quantidade={produto.quantidade}
                            />
                        </div>
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div>
        </div>
    );
}