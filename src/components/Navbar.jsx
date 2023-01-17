
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
      <nav className='menu'>
        <ul className='lista'>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/catalogo"><li>Catalogo</li></NavLink>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar