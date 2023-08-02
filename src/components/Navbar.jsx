/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { signOut } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const {user} = useSelector((store) => store.user)
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-light bg-light my-5 p-2 border">
        <div className="container-fluid">
            <a className="navbar-brand">APP</a>
           { user && <div className='d-flex align-items-center'>
                <h4>{user.email}</h4>
                <button onClick={() => dispatch(signOut())} className='btn btn-dark mx-5'> Salir </button>
            </div>}
        </div>
    </nav>
  )
}

export default Navbar