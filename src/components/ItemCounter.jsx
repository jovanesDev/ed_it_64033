import React from 'react'
import useCounter from '../hooks/useCounter'

const ItemCounter = (props) => {
    const {producto} = props
    const {counter,disabled,handleSum,handleRestar,handleAddCarrito} = useCounter()
    return (
        <div>
            <div className='d-flex justify-content-around my-3 '>
                <div className='fs-5'>
                    <button onClick={handleRestar} className='btn btn-warning'> - </button>
                </div>
                <div className='fs-4'>{counter}</div>
                <div className='fs-5'>
                    <button onClick={handleSum} className='btn btn-warning'> + </button>
                </div>
            </div>
            <div className='d-flex my-4'>
                <button disabled={disabled} onClick={() => handleAddCarrito({ ...producto, cantidad: counter })} className='mx-auto btn btn-success'>
                    Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCounter