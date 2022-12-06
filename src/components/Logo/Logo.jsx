import './logo.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
      <Link to="/">
    <div className='logo'>
        <a href="index.html">
          <img src="https://firebasestorage.googleapis.com/v0/b/carrito-viejo-leon.appspot.com/o/logo.png?alt=media&token=93b9be04-370a-40d6-9808-9992ee6d80d0" alt="Logo" width="100px"/>
        </a>
    </div>
    </Link>
    );
}


export default Logo;