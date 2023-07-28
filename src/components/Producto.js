import React from 'react'
import { useDispatch } from 'react-redux'

const Producto = ({
    id,
    nombre,
    version,
    precio,
    addProductosCarrito,
    deleteFromCarrito,
    carritoItem
}) => {

    const dispatch = useDispatch()
    return (
        <div class="card" style={{ width: "8rem;" }}>
            <div class="card-body">
                <h5 class="card-title fs-1">{nombre}</h5>
                <h5 class="card-title fs-3">{version}</h5>
                <p class="card-text fs-4 text-primary">${precio}</p>
                {
                    !carritoItem && 
                    <button onClick={() => dispatch(addProductosCarrito({ id, nombre, version, precio }))} className='btn btn-dark'>
                        Agregar al Carrito
                    </button>
                }

                {
                    carritoItem && 
                    <button onClick={() => dispatch(deleteFromCarrito(id))} className='btn btn-danger'>
                     Eliminar
                    </button>
                }

            </div>
        </div>
    )
}

export default Producto