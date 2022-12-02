import { Link } from 'react-router-dom';
const Dropdown = () => {
    return (
 <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
        </a>

    <ul className="dropdown-menu">
      <Link className='nav-link' to="/category/1">
      <a className="dropdown-item" href="#">Chocolates</a>
      </Link>
      <Link className='nav-link' to="/category/2">
      <a className="dropdown-item" href="#">Alfajores</a>
      </Link>
      <Link className='nav-link' to="/category/3">
      <a className="dropdown-item" href="#">Raspaditas</a>
      </Link>
    </ul>
 </div>
    );
}


export default Dropdown;