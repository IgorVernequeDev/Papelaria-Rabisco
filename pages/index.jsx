import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded successfully');
      })
      .catch(err => {
        console.error('Error loading Bootstrap JS:', err);
      });
  }, []);

  return (
    <>
      <Navbar bgcolor="orange" title="Home" />
      <main className='container'>
        <div id="inicio">
          <img src="squarepants.png" alt="Bob esponja lendo um livro" style={{ transform: 'scaleX(-1)' }} />
          <h1>Papelaria Rabisco</h1>
          <img src="squarepants.png" alt="Bob esponja lendo um livro" />
        </div>
        <p className="lead mt-2">A melhor papelaria para todas as suas necessidades de escritório e estudo.</p>

        <section id="produtos" className="my-5">
          <section id="sobre" className="mb-5">
            <h2>Sobre Nós</h2>
            <p>Fundada em 2024, a Papelaria Rabisco se dedica a fornecer produtos de alta qualidade para estudantes, profissionais e artistas. Nosso objetivo é oferecer uma ampla gama de produtos a preços acessíveis, garantindo a satisfação dos nossos clientes.</p>
          </section>
          <h2 className='text-center my-5'>Confira nossos produtos!</h2>
          <div className="d-flex justify-content-around">
            <div className="card">
              <div className="my-4 d-flex justify-content-center"><img src="caderno.png" className="card-img-top w-50" alt="Produto 1" /></div>  
              <div className="card-body">
                <h5 className="card-title">Cadernos</h5>
                <p className="card-text">Variedade de cadernos para todas as idades e necessidades.</p>
              </div>
            </div>
            <div className="card">
              <div className="my-4 d-flex justify-content-center"><img src="estojo.png" className="card-img-top w-50" alt="Produto 1" /></div>
              <div className="card-body">
                <h5 className="card-title">Canetas e Lápis</h5>
                <p className="card-text">Diversas opções de canetas e lápis de alta qualidade.</p>
              </div>
            </div>
            <div className="card">
              <div className="my-4 d-flex justify-content-center"><img src="lápis de cor.png" className="card-img-top w-50" alt="Produto 1" /></div>
              <div className="card-body">
                <h5 className="card-title">Materiais de Arte</h5>
                <p className="card-text">Tudo o que você precisa para soltar sua criatividade.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer bgcolor="orange" />
    </>
  );
}
