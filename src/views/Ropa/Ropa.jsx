import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

const Ropa = () => {

  const ropa_routes = [
    {
      path:'/ropa',
      text:'Inico'
    },
    {
      path:'/ropa/mujer',
      text:'Mujer'
    },
    {
      path:'/ropa/hombre',
      text:'Hombre'
    }
  ]

  return (
    <div>
        <nav>
            <ul style={{display:'flex',justifyContent:'space-around'}}>
                {ropa_routes.map(({path,text},index)=> (
                  <NavLink style={({ isActive }) => {
                    return {
                      color: isActive ? "green" : "inherit",
                    };
                  }} to={path}>{text}</NavLink>
                ))}
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Ropa