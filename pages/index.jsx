import React from 'react';
import Navbar from '../components/navbar'
import Card from '../components/cardProduct'
import Carrousel from '@/components/carrousel'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyApp() {
    return (
        <>
           <Navbar bgcolor="black" title="Papelaria Rabisco"/>
           <Carrousel />
            <main>
                <div id="inicio">
                    <img src="squarepants.png" alt="Bob esponja lendo um livro" style={{ transform: 'scaleX(-1)' }} />
                    <h1>Seção ADM - Papelaria Rabisco</h1>
                    <img src="squarepants.png" alt="Bob esponja lendo um livro" />
                </div>
                    <Card />
            </main>
        </>
    )
}