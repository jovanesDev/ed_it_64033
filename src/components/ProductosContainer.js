import React, { useEffect }  from 'react'
import Spinner from './Spinner'
import Producto from './Producto'
import { useDispatch, useSelector } from 'react-redux'
import {addProductoCarrito} from '../features/ProductosSlice'
import { fetchProductos } from '../features/ProductoSync'

const ProductosContainer = () => {
   const {loading,productos} = useSelector((store) => store.productos)
   const dispatch = useDispatch()

   useEffect(() => {
    
      dispatch(fetchProductos())
   
     return () => {
       
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   

    if(loading){

        return <Spinner/>
    }

  return (
    <div className='d-flex my-5  justify-content-around'>
        {productos.map((producto,index) => (
            <Producto key={index} addProductosCarrito={addProductoCarrito} {...producto}/>
        ))}
    </div>
  )
}

export default ProductosContainer