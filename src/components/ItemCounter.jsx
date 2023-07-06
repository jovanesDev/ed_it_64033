import React, { useContext, useState } from 'react'
import { ProductosContext } from '../context/ProductosProvider'

const ItemCounter = (props) => {
    const {producto} = props
    const { handleAddCarrito } = useContext(ProductosContext)
    const [counter, setCounter] = useState(1)

    const handleSum = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

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
                <button onClick={() => handleAddCarrito({ ...producto, cantidad: counter })} className='mx-auto btn btn-success'>
                    Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCounter