import { Link } from 'react-router-dom'
import './item.css'
const Item = ({prod}) => {

return (
    <div className="card" key={prod.id}>
    <img src={prod.img} className="card-img-top cardImg" alt="..." />
 <div className="tarjetaDetalle">
      <h5 className="card-title">{prod.nombre}</h5>
      <p className="card-text">Marca: {prod.marca}</p>
      <p className="card-text">Precio: ${prod.precio}</p>
      <p className="card-text">Stock: {prod.stock}</p>
      <Link className="botonDetalle" to={`/producto/${prod.id}`}><button className="botonProducto">Ver Detalle</button></Link>
 </div>
</div>  
 
);

}

export default Item;