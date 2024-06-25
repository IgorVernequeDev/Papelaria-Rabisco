import React from 'react';
import NavBar from '../components/navbar';
import Card from '@/components/cardProduct'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contato() {
    return (
        <main>
            <NavBar title="Produtos" bgcolor="black"/>
            <div id="inicio">
            <img src="squarepants.png" alt="Bob esponja lendo um livro" style={{ transform: 'scaleX(-1)' }} />
            <h1>Seção ADM - Papelaria Rabisco</h1>
            <img src="squarepants.png" alt="Bob esponja lendo um livro" />
                </div>
            <Card />
        </main>
    );
}