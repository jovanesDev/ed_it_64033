/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example" className='my-5'>
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav>
  )
}

export default Pagination