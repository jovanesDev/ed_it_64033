import React, { useContext } from 'react'
import { ProductosContext } from '../context/ProductosProvider'

const CarritoItem = (props) => {
    const {item} = props
    const {handleRemoveCarrito} = useContext(ProductosContext)
  return (
    <div className='d-flex justify-content-around align-items-center border py-2 my-2'>
        <div>Nombre - {item.nombre}</div>
        <div> Precio -{item.precio}</div>
        <div> Cantidad - {item.cantidad}</div>
        <div>
            <button onClick={()=> handleRemoveCarrito(item)} className='btn btn-danger'>Borrar</button>
        </div>
    </div>
  )
}

export default CarritoItem