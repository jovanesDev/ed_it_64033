import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = (props) => {


  return (
    <>
      <h1 className='text-center my-5 text-uppercase'>Tareas</h1>
      <table className='table'>
          <TableHeader/>
          <TableBody {...props} />
      </table>
    </>
  )
}

export default Table

