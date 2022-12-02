import React from "react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getProducto, updateProducto } from "../../assets/firebase";
import { CartContext } from "../../context/CartContext"
import { toast } from 'react-toastify';


const Checkout = () => {
const datosFormulario = React.useRef()
let navigate = useNavigate()
const {cart, empityCart, totalPrice} = useContext(CartContext);



const consulatFormulario = (e) => {
    e.preventDefault()
    console.log(datosFormulario);
    const datForm = new FormData(datosFormulario.current)
    const valores = Object.fromEntries(datForm)
    const aux = [...cart]
   aux.forEach(producto => {
    getProducto(producto.id)
    .then(prod => {
      prod.stock -= producto.cant
      updateProducto(producto.id, prod)
    })
   })



   createOrdenCompra(valores, totalPrice(), new Date().toISOString().slice(0, 10)).then(orden => { 
  toast.success(`Su orden ${orden.id} fue creada con éxito`)
  empityCart()
  e.target.reset()
  navigate("/")

}).catch(error => {
  toast.error(`Su orden no fue creada con éxito`)
  console.log(error);
})
}








    return (
    <div className="container">
       <form onSubmit={consulatFormulario} ref={datosFormulario}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
          <input type="text" className="form-control" name="nombre"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="email"/>
        </div>
        <div className="mb-3">
          <label htmlFor="dni" className="form-label">DNI</label>
          <input type="number" className="form-control" name="dni"/>
        </div>
        <div className="mb-3">
          <label htmlFor="celular" className="form-label">Número Telefonico</label>
          <input type="number" className="form-control" name="celular"/>
        </div>
        <div className="mb-3">
          <label htmlFor="diireccion" className="form-label">Dirección</label>
          <input type="text" className="form-control" name="direccion"/>
        </div>
        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
      </form>

    </div>
    );
}

export default Checkout;
