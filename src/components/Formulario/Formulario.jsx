import React from 'react'
import useForm from '../../hooks/useForm'

const Formulario = (props) => {
  const {tarea,handleChange} = useForm()
  return (
    <div className='d-flex flex-column'>
      <h1>Formulario</h1>
        <div className='d-flex flex-column my-2' >
            <label htmlFor="nombre">nombre de la tarea</label>
            <input onChange={handleChange} type="text" name='name'id='nombre' />
        </div>
        <div className='d-flex' >
            <label htmlFor="complete">Estado de la tarea</label>
            <input className='mx-4' onChange={handleChange} type="checkbox" name="complete" id="complete" />
        </div>
        <div>
          <button onClick={() => props.guardarTarea(tarea)} className='btn btn-success my-4'>Agregar Tarea ➕ </button>
        </div>
    </div>
  )
}

export default Formulario