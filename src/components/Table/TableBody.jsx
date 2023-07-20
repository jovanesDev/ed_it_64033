import React from 'react'
import TableBodyItem from './TableBodyItem'

const TableBody = (props) => {
  const {tareas,deleteTarea,updateTarea} = props
  return (
    <tbody>
        {tareas.map((item,index) => (
            <TableBodyItem key={index} item={item} deleteTarea={deleteTarea} updateTarea={updateTarea} />
        ))}
    </tbody>
  )
}

export default TableBody