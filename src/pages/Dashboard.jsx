/* eslint-disable no-useless-concat */
import React from 'react'
import CustomCard from '../shared/Card'
import Pagination from '../components/Pagination'

const Dashboard = () => {
  return (
    <div className='container d-flex flex-column py-5'>
            <h2 className='text-center my-5'>Productos</h2>
            {[1,2,3,4].map((item) => (<CustomCard productName={ "Producto" + " " + item}/>))}
            <Pagination />
    </div>
  )
}

export default Dashboard