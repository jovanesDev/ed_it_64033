import axios from 'axios';
import {createContext,useState,useEffect, useContext} from 'react'
import { GlobalContex } from './GlobalProvider';

export const ProductosContext = createContext('')
const {Provider} = ProductosContext

const ProductosProvider = ({children}) => {

const {loading,loadingOff} = useContext(GlobalContex)
const [productos,setProductos] = useState([]);
const [carrito,setCarrito] = useState([]);


async function getProductos () {
    try {
        const result = await axios.get('http://localhost:3001/productos')
        setProductos(result.data)
        loadingOff()
    } catch (error) {
        console.log(error)
        loadingOff()
    }
}


function addProductosCarrito (producto){
    setCarrito([...carrito,producto])
}

function deleteFromCarrito (id) {
  setCarrito(carrito.filter((item) => item.id !== id))
}

useEffect(() => {
    getProductos()
  return () => {
    setProductos([])
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



  return (
    <Provider 
        value={{
           loading,
           productos,
           carrito,
           addProductosCarrito,
           deleteFromCarrito
        }}
    >
        {children}
    </Provider>
  )
}

export default ProductosProvider