import NavBar from '../components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { getProdutos } from '@/services/apiRabisco'
import CardList from '@/components/CardList'

export default function Produtos() {

  const [produtos, setProdutos] = useState([])
  
  async function buscaProdutos() {
    try {
      const data = await getProdutos()
      setProdutos(data)
    }
    catch(error) {
      console.error('Erro ao buscar produtos:',error)
    }
  }

  useEffect(() => {
    buscaProdutos()
  }, [])

  return (
    <>
      <NavBar title="Produtos" bgcolor="orange" />
      <main className='container'>
        <div id="inicio">
          <img src="squarepants.png" alt="Bob esponja lendo um livro" style={{ transform: 'scaleX(-1)' }} />
          <h1>Papelaria Rabisco</h1>
          <img src="squarepants.png" alt="Bob esponja lendo um livro" />
        </div>
        <p className="lead mt-2">A melhor papelaria para todas as suas necessidades de escritório e estudo.</p>
        <div className="row w-100">
          <CardList produtos={produtos} />
        </div>
      </main>
      <Footer bgcolor="orange" />
    </>
  );
}
