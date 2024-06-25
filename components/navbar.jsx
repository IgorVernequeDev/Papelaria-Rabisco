import Link from 'next/link'

export default function navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg p-2" style={{
      backgroundColor: props.bgcolor
    }}>
      <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
        <img src="rabisco.png" alt="livro" />
        <h1 className="navbar-brand text-white mt-1" href="#">{props.title}</h1>
        <ul className="navbar-nav mr-auto">
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
        </ul>
      </div>
    </nav>
  )
}