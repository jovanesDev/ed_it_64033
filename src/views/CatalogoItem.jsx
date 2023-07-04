import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { catalogo } from '../utils'

const CatalogoItem = () => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [coche, setCoche] = useState(null);
  
  const naviagate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const { state } =  location
  console.log(state)


  useEffect(() => {
    setTimeout(() => {
      const producto = catalogo.find((producto) => producto.id === state);
      if (producto) {
        setCoche(producto)
        setLoading(false)
      } else {
        setLoading(false)
        setError(true)
      }
    }, 3000);


    return () => {

    }
  }, [])




  if (loading) {

    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (!loading && error) {

    return (
      <div>
        <button onClick={() => naviagate(-1)}>Volver </button>
        <h1>Ups el Producto no existe !!</h1>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <img width={'500px'} height={'300px'} src={coche.img} alt="imagen" />
          <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>{coche.text}</h2>
          <button onClick={() => naviagate(-1)}>Volver </button>
        </div>
      </div>
      {/* { state &&  <div>
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Dueño {state.name}</h1>
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Edad {state.age}</h2>
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Pais {state.country}</h2>
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Ciudad {state.city}</h2>
      </div>} */}
    </div>
  )
}

export default CatalogoItem