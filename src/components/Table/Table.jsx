import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import Formulario from '../Formulario/Formulario'

const Table = (props) => {
    
  return (
    <>
     {props.showForm && <Formulario {...props}/>}
     <div className='d-flex justify-content-center'>
        <button onClick={()=>props.changeShowForm()} className='btn btn-outline-success'>
          {!props.showForm ? 'Agregar Tarea ➕' : 'Cerrar Formulario ❌'}
        </button>
      </div>
      <h1 className='text-center my-5 text-uppercase'>Tareas</h1>
      <table className='table'>
          <TableHeader/>
          <TableBody {...props} />
      </table>
    </>
  )
}

export default Table

