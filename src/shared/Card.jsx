import React from 'react'

const CustomCard = ({productName}) => {
  return (
    <div className="card mt-2">
        <div className="card-body d-flex justify-content-between">
         <div>
            <h5>{productName}</h5>
         </div>
         <div className='d-flex justify-content-around align-items-center'>
                <button className='btn btn-warning mx-3'>editar</button>
                <button className='btn btn-danger'>borrar</button>
         </div>
        </div>
    </div>
  )
}

export default CustomCard