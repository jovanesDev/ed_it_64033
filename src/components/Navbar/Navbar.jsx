import React, { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { ProductosContext } from '../../context/ProductosProvider'

const Navbar = () => {

    const {carrito} = useContext(ProductosContext)
    console.log("🚀 ~ file: Navbar.jsx:9 ~ Navbar ~ carrito:", carrito)
    const navigate = useNavigate()

  return (
    <nav className='d-flex px-5 py-4 bg-dark text-light justify-content-between align-items-center'>
        <span onClick={() => navigate('/')} className='fs-3'>
            Logo
        </span>
        <div className='fs-3 d-flex align-items-center'>
            <BsFillCartFill className='mx-2' onClick={() => navigate('/carrito')}/> 
            {carrito.length}
        </div>
    </nav>
  )
}

export default Navbar