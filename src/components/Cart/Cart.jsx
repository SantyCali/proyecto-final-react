import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Carrito = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)
    return (
    <>
     {cart.length === 0 ?
     <div>
        <p>Tu carrito esta vacio</p>
        <Link to={"/"}><a className="btn btn-dark">Ir al inicio de la tienda</a></Link>
     </div>
     :
     <div>
        {cart.map((prod, indice) => 
              <div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">Cantidad: {prod.cant}</p>
                    <p className="card-text">Precio unitario: {prod.precio}</p>
                    <p className="card-text">Subtotal: {prod.precio * prod.cant}</p>
                  </div>
                  <a className="btn btn-light" onClick={() => removeItem(prod.id)}>Eliminar producto</a>
                </div>
              </div>
            </div>)}
            <div>
              <p>Total: {totalPrice()}</p>
              <a className="btn btn-dark" onClick={emptyCart}>Limpiar Carrito</a>
              <Link to="/checkout">
                <a className="btn btn-primary">Finalizar Compra</a>
              </Link>
            </div>
         </div>
        }
   </> 
);
}


export default Carrito;