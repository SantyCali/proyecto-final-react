import { Link } from 'react-router-dom';
const Dropdown = () => {
    return (
 <div>
    <ul className='productos-barra'>
        <Link className='nav-link' to="/category/1">
        <img src="https://firebasestorage.googleapis.com/v0/b/carrito-viejo-leon.appspot.com/o/chocolates.jpeg?alt=media&token=7677fee1-8e44-408a-938c-6a0e98e2a0e6" alt="" />
      </Link>
      <Link className='nav-link' to="/category/2">
        <img src="https://firebasestorage.googleapis.com/v0/b/carrito-viejo-leon.appspot.com/o/alfajores.jpeg?alt=media&token=1936f10c-ac89-420b-a622-5fcffd75ff7a" alt="" />
      </Link>
      <Link className='nav-link' to="/category/3">
        <img src="https://firebasestorage.googleapis.com/v0/b/carrito-viejo-leon.appspot.com/o/raspaditas.jpeg?alt=media&token=f5081493-399a-4077-86a5-32e9bb843a68" alt="" />
      </Link>
    </ul>
 </div>

    );
}


export default Dropdown;