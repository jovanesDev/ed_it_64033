import React from 'react'
import ProductosContainer from '../components/Productos/ProductosContainer'
import ComponenteUno from '../components/ComponentesPrueba/ComponenteUno'
import ComponenteDos from '../components/ComponentesPrueba/ComponenteDos'

const Productos = () => {
  return (
    <div>
       <ProductosContainer/>
       <hr/>
       <h1>Componentes de Prueba</h1>
       <ComponenteUno/>
       <ComponenteDos/>
    </div>
  )
}

export default Productos