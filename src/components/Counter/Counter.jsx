import React from 'react'

const Counter = () => {
  return (
    <div className='d-flex justify-content-between'>
            <div>
                <button className='btn btn-primary'>Sumar</button>
            </div>
            <div>
                <h2 className='fs-1'>Contador : 1</h2>
            </div>
            <div>
                <button className='btn btn-primary'>Restar</button>
            </div>
    </div>
  )
}

export default Counter