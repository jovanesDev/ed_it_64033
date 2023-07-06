import React from 'react'
import ItemCounter from '../ItemCounter'

const ProductoCard = (props) => {
    const {id,nombre,precio} = props
    const producto = {id,nombre,precio}
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Nombre - {nombre}</h5>
                <p className="card-text"> Precio - ${precio}</p>
            </div>
            <ItemCounter producto={producto}/>
        </div>
    )
}

export default ProductoCard