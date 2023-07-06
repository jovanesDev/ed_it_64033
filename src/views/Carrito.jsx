import React, { useContext } from 'react'
import { ProductosContext } from '../context/ProductosProvider'
import CarritoItem from '../components/CarritoItem'

const Carrito = () => {
    const {carrito} = useContext(ProductosContext)
  return (
    <div className='my-5 px-5'>
        {carrito.length > 0 ? carrito.map((item,i) => (
            <CarritoItem key={i} item={item}/>
        )) : <h1 className='text-center'>Carrito Vacio</h1>}
    </div>
  )
}

export default Carrito