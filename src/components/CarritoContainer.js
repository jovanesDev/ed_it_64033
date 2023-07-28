// import React, { useContext } from 'react'
// import { ProductosContext } from '../context/ProductosProvider'
import Producto from './Producto'
import {deleteFromCarrito} from '../features/ProductosSlice'
import { useSelector } from 'react-redux'


const CarritoContainer = () => {

    //const { carrito, deleteFromCarrito } = useContext(ProductosContext)
    const {carrito} = useSelector((store) => store.productos)
    

    return (
        <div>
            {carrito.length > 0 ? carrito.map((producto, index) => (
                <Producto key={index} carritoItem deleteFromCarrito={deleteFromCarrito}  {...producto} />
            )) : <h1 className='text-center'>No hay Nada</h1>}
        </div>
    )
}

export default CarritoContainer