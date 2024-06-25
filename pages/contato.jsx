import React, { useEffect, useState } from 'react';
import { getFuncionarios } from '@/services/apiFuncionarios'
import CardListFuncionarios from '@/components/CardListFuncionarios'
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contato() {
  const [funcionarios, setFuncionarios] = useState([])
  
  async function buscaFuncionarios() {
    try {
      const data = await getFuncionarios()
      console.log(data)
      setFuncionarios(data)
    }
    catch(error) {
      console.error('Erro ao buscar funcionários:',error)
    }
  }

  useEffect(() => {
    buscaFuncionarios()
  }, [])
  return (
    <>
      <Navbar bgcolor="orange" title="Contato" />
      <main className='container text-center'>
        <div id="inicio">
          <img src="squarepants.png" alt="Bob esponja lendo um livro" style={{ transform: 'scaleX(-1)' }} />
          <h1>Papelaria Rabisco</h1>
          <img src="squarepants.png" alt="Bob esponja lendo um livro" />
        </div>
        <p className="lead mt-2">A melhor papelaria para todas as suas necessidades de escritório e estudo.</p>
          <h1 className='mt-5'>Contato</h1>
            <CardListFuncionarios funcionarios={funcionarios} />
          <p className="lead my-4">Estamos aqui para ajudar! Entre em contato conosco através dos seguintes meios:</p>

          <div className="row mt-4">
            <div className="col-md-6">
              <h2>Endereço</h2>
              <p>Rua Exemplo, 123, Centro</p>
            </div>
            <div className="col-md-6">
              <h2>Telefone</h2>
              <p>(11) 1234-5678</p>
            </div>
            <div className="col-md-6 mt-4">
              <h2>Email</h2>
              <p>contato@papelariarabisco.com</p>
            </div>
            <div className="col-md-6 mt-4">
              <h2>Horário de Funcionamento</h2>
              <p>Segunda a Sexta: 8h - 18h / Sábado: 8h - 12h</p>
            </div>
          </div>
      </main>
      <Footer bgcolor="orange" />
    </>
  );
}