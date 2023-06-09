import React from 'react'
import NavLink from './NavLink'

const Navbar = (props) => {
  const {navbar_bg,navbar_brand_name,navbar_item} = props
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${ navbar_bg || 'bg-dark' }`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{ navbar_brand_name || 'Navbar'}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navbar_item.length > 0 && navbar_item.map((item,index) => {
            return <NavLink key={index} name={item} />
          })}
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar