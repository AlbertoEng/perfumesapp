import React, { useState } from 'react'

const CartWidget = () => {

    const [cantProductos, setCantProductos] = useState(0);
  

    return (
        <div className='containerCarrito'>
            <span className='cantProductos'>{cantProductos}</span>
            <img className='carrito' src="src/assets/cart.svg" alt="" />
        </div>
    )
}

export default CartWidget