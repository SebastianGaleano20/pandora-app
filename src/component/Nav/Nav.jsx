import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Nav.css"

export function Nav() {
  return (
    <nav>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="container-items">
        <ul>
          <li>
            <Link to="/Nosotros">Acerca de</Link>
          </li>
          <li>
            <Link to="/Productos">Productos</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/RRHH">Trabaja con nosotros</Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
}
