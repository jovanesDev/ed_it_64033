/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Spinner from '../../shared/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { checkUserStatus } from '../../features/userSlice'

const WithNavbar = () => {
  const {loading,auth} = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
   dispatch(checkUserStatus())
    return () => {
    }
  }, [])
  

  useEffect(() => {
    if(auth && !loading) {
        navigate('/')
    }else {
        navigate('/login')
    }
    return () => {
      
    }
  }, [auth])
  
  return (
    <div className='container'>
        <Navbar />
        {loading ? <Spinner /> : <Outlet />}
        {/* <Outlet /> */}
        <hr />
    </div>
  )
}

export default WithNavbar