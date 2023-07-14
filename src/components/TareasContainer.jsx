import React from 'react'
import Table from './Table/Table'
import WithAxiosFunctions from '../hoc/WithAxiosFunctions'


const TareasContainer = () => {
    
const TableHoc = WithAxiosFunctions(Table)


  return (
    <div className='container my-5 py-5'>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-outline-success'>Agregar Tarea ➕</button>
        </div>
        <TableHoc/>
    </div>
  )
}

export default TareasContainer