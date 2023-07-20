import React from 'react'
import Table from './Table/Table'
const TareasContainer = (props) => {
 
  return (
    <div className='container my-5 py-5'>
      <Table {...props} />
    </div>
  )
}

export default TareasContainer