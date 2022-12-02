import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/darkMode';

//Componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from "./Cart/Cart";
import { CartContextProvider } from '../context/CartContext';
import Checkout from "./Checkout/Checkout"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
const App = () => {
  return (
 <>
  <DarkModeProvider>
    <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path="/product/*" element = {<h1>Producto no encontrado</h1>}></Route>
      </Routes>
      <ToastContainer/>
    </CartContextProvider>
    </BrowserRouter>
  </DarkModeProvider>
 </>
   
  );
}

export default App;