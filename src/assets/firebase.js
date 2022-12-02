import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "carrito-viejo-leon.firebaseapp.com",
  projectId: "carrito-viejo-leon",
  storageBucket: "carrito-viejo-leon.appspot.com",
  messagingSenderId: "165581540993",
  appId: "1:165581540993:web:3575825bffba6c444a4780"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore()


const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    console.log(productos);
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}


const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos",id))
    let item
    if(prod.data()) {
        item = {...prod.data(), id: prod.id}
    } else {
        item = "Producto no encontrado"
    }
    return item
}


const cargarBDD = async () => {
    const promise = await fetch("./json/productos.json")
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),{
           nombre: prod.nombre,
           marca: prod.marca,
           idCategoria: prod.idCategoria,
           precio: prod.precio,
           stock: prod.stock,
           img: prod.img
        })
    })
}


const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
        nombre: objProducto.nombre,
        marca: objProducto.marca,
        idCategoria: objProducto.idCategoria,
        precio: objProducto.precio,
        stock: objProducto.stock,
        img: objProducto.img
    })

    return estado
}


const updateProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
}


const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}


//CREATE AND READ ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        emali: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}


const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}


export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra} 