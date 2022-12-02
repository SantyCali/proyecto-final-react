import { useState, useEffect, useContext } from "react"
import ItemList from "../ItemList/ItemList.jsx";
import {getProductos} from "../../assets/firebase.js"
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../../context/darkMode.js"; 
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    useEffect(() => {
        if(category) {
          getProductos().then(products => {
            const productsList = products.filter(prod => prod.idCategoria === parseInt(category))
            console.log(productsList);
            const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
        })
    } else {
        getProductos().then(productsList => {
            const cardProductos = ItemList({productsList})
                setProductos(cardProductos) 
       })
    }

    },[category]);

        

return (

    <div className={darkMode ? "row darkMode centrarElementos" : "row centrarElementos"}>
      {productos}
    </div>

);

}

export default ItemListContainer;

