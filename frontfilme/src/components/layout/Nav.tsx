import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold'}}>
          <Link to="/cadastrar" style={{ textDecoration: 'none' }}>Cadastrar</Link>
        </li>
        <li style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold' }}>
          <Link to="/listar" style={{ textDecoration: 'none' }}>Listar</Link>
        </li>
        <li style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold' }}>
          <Link to="/buscar/:titulo" style={{ textDecoration: 'none' }}>Buscar</Link>
        </li>
        <li style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold' }}>
          <Link to="/favoritos/:filmesId" style={{ textDecoration: 'none' }}>Favoritos</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Nav;
