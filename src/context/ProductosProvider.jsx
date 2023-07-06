import React, { createContext, useState } from 'react'

export const ProductosContext = createContext('')
const {Provider} = ProductosContext

const ProductosProvider = (props) => {
    
    const [carrito,setCarrito] = useState([]);
    const productos = [
        {
            id:1,
            nombre: 'Camisa',
            precio: 100,
        },
        {
            id:2,
            nombre: 'Pantalon',
            precio: 100,
        },
        {
            id:3,
            nombre: 'Camisa',
            precio: 100,
        }
    ]

  const handleAddCarrito = (producto) => setCarrito([...carrito,producto]);
  const handleRemoveCarrito = (producto) => setCarrito(carrito.filter(item => item.id!== producto.id));

  return (
    <Provider value={{
            carrito,
            productos,
            handleAddCarrito,
            handleRemoveCarrito,
    }} >
        {props.children}
    </Provider>
  )
}

export default ProductosProvider