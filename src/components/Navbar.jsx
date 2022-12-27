import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='menu'>
        <ul className='lista'>
            <a href=""><li>Home</li></a>
            <a href="/productos"><li>Productos</li></a>
            <a href="/Contacto"><li>Contacto</li></a>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar