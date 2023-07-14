import React from 'react'

const TableBodyItem = ({item,deleteTarea,updateTarea}) => {
  return (
    <tr>
    <th scope="row">{item.id}</th>
    <td>{item.name}</td>
    <td>{ item.complete ? "✅" : "❌"}</td>
    <td>
        <button onClick={()=> updateTarea(item)} className='btn btn-warning'>{item.complete ? 'incompletar' : 'completar'}</button>
    </td>
    <td>
        <button onClick={()=> deleteTarea(item.id)} className='btn btn-danger'>borrar</button>
    </td>
    </tr>
  )
}

export default TableBodyItem