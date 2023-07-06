import React, { useContext } from 'react'
import { ProductosContext } from '../../context/ProductosProvider'
import ProductoCard from './ProductoCard'

const ProductosContainer = () => {

    const { productos } = useContext(ProductosContext)
    console.log(productos)

  return (
    <div className='d-flex flex-wrap'>
        {productos.map((productos, i) => (
            <ProductoCard key={i} {...productos}/>
        ))}
    </div>
  )
}

export default ProductosContainer