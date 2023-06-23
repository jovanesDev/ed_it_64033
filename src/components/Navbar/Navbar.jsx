import React from 'react'
import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {

    const navbar_items = [
        {
            to:'/',
            text:'Home'
        },
        {
            to:'/catalogo',
            text:'Catalogo'
        },
        {
            to:'/carrito',
            text:'Carrito'
        },
        {
            to:'/contacto',
            text:'Contacto'
        },
        {
            to:'/ropa',
            text:'Ropa'
        }
    ]

  return (
    <nav>
        <ul style={{display:'flex',justifyContent:'space-evenly',background:'#E6E6E6',padding:'5px'}}>
            {
                navbar_items.map(({to,text},index) => (
                    <NavLink style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "inherit",
                        };
                      }} to={to} key={index}>{text}</NavLink>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar