import React from 'react'

const Spinner = () => {
  return (
    <div style={{minHeight:'600px',width:"100%"}} className='d-flex justify-content-center align-items-center'>
            <div>
                <div class="spinner-grow mx-auto" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
    </div>
  )
}

export default Spinner