import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyApp() {
    const urlDaImagem = "https://i.pinimg.com/originals/02/68/86/02688636473aeac9b2bc7c01bed1b13d.png";
    const [dados, setDados] = useState([]);

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
    return (
        <>
            <Navbar />
            <main>
                <div id="inicio">
                    <img src={urlDaImagem} alt="Bob esponja lendo um livro" style={{ transform: 'scaleX(-1)' }} />
                    {dados.map(item => (
                    <h1>Produto: {item.nome}</h1>
                    ))}
                    <img src={urlDaImagem} alt="Bob esponja lendo um livro" />
                </div>
            </main>
        </>
    )
}