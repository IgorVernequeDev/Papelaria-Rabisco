import Link from 'next/link'

export default function navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg p-3" style={{
      backgroundColor: props.bgcolor
    }}>
      <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
        <div className="align-items-center d-flex justify-content-start w-25">
          <Link href="/" className='text-center'>
            <img src="rabisco.png" alt="livro" className='w-75' />
          </Link>
          <h1 className='ms-5 navbar-brand text-white mt-1'>Papelaria Rabisco</h1>
        </div>
        <div className="d-flex w-50 justify-content-center">
          <h1 className="navbar-brand text-white mt-1" href="#">{props.title}</h1>
        </div>
        <ul className="navbar-nav mr-auto w-25">
          <li className="nav-item dropdown m-2">
            <Link href="/">
              <button className='rounded p-2'>Home</button>
            </Link>
          </li>
          <li className="nav-item dropdown m-2">
            <Link href="/produtos">
              <button className='rounded p-2'>Produtos</button>
            </Link>
          </li>
          <li className="nav-item dropdown m-2">
            <Link href="/contato">
              <button className='rounded p-2'>Contato</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}