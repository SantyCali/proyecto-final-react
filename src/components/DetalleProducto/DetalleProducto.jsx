import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkMode.js"; 
import {useContext } from "react"
import { CartContext } from "../../context/CartContext";





const DetalleProducto = ({producto}) => {


  const {cart, isInCart, addItem} = useContext(CartContext)
  
const onAdd = (contador) => {
  addItem(producto, contador)
}


const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    return (
        <div className={darkMode ? "row darkMode" : "row"}>
              <div className="row g-0">
                <img src={producto.img} className="img-fluid rounded-start" alt="" />
              </div>
              <div className="detalleProduct">
                <div className="card-body"></div>
                 <h5 className="card-title">{producto.nombre}</h5>
                 <p className="card-text">Marca: {producto.marca}</p>
                 <p className="card-text">Precio: ${producto.precio}</p>
                 <p className="card-text">Stock: {producto.stock}</p>
                 <ItemCount stock = {producto.stock} onAdd={onAdd}/> <br />
                 <Link to="/carrito"><button className="botonProducto2">Comprar ahora</button></Link>
              </div>
        </div>
    );

    }

export default DetalleProducto;