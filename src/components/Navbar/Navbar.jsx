import React from 'react';
import './navbar.css'
import Dropdown from '../Dropdown/Dropdown';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import Secciones from './Secciones/Secciones';
import { DarkModeContext } from "../../context/darkMode.js";
import { useContext } from "react";


const Navbar = React.memo( () => {
  
const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    return (
    
      
    <>
      <nav className="navbar navbar-expand-lg bg-barra">
      <div className="container-fluid">
      <Logo/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">



          <Secciones/>
          <Dropdown/>
          </ul>
        </div>
          <button className={darkMode ? "btn btn-light cambiarColor" : "btn btn-dark cambiarColor"} onClick={toggleDarkMode}>Cambiar color</button>
        <CartWidget/>
      </div>
    </nav>

    </> 

    );
})

export default Navbar;
