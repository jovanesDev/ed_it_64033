
import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {carrito} = useSelector((store) => store.productos)
  return (
    <nav className="navbar navbar-light bg-light px-5">
      <div className="container-fluid">
        <h5 className="navbar-brand">
          <Link to='/' className='nav-link text-dark'>
            Logo
          </Link>
        </h5>
        <div className='pointer'>
          <Link to='/carrito' className='btn btn-outline-dark'>
            <FiShoppingCart />
            <span className='mx-2'>
             {carrito.length}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar