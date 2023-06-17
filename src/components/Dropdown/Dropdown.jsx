import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle seccionesColor" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PRODUCTOS
            </span>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/category/consolas'>Consolas</Link></li>
                <li><Link className="dropdown-item" to='/category/joystick'>Joystick</Link></li>
                <li><Link className="dropdown-item" to='/category/juegos'>Juegos</Link></li>
                <li><Link className="dropdown-item" to='/category/accesorios'>Accesorios</Link></li>
            </ul>
        </li>
    );
}

export default Dropdown;
