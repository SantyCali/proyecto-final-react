import{useState, useEffect, } from "react";
import {useParams} from 'react-router-dom'
import { getProducto } from "../../assets/firebase.js";
import DetalleProducto from "../DetalleProducto/DetalleProducto";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]); 
    const {id} = useParams()


    useEffect(() => {
        getProducto(id).then(prod => {
        setProducto(prod)
    })
 }, []);

    return (
        <div>
            <div className="card mb-3 container detalleProducto">
              <DetalleProducto producto={producto}/>
            </div>
        </div>
    )
}


export default ItemDetailContainer;