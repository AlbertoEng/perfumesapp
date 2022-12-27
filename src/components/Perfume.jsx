import React from 'react'

const Perfume = () => {
  return (
    <div className='product'>
        <div className='imgContainer'>
            <img className='perfume' src="imgs/one.webp" alt="" />
        </div>
        <div className='datosPerfume'>
            <h2 className='titulo--product'>Calvin Klein</h2>
            <p>Aroma delicado por periodos largos de tiempo.</p>
            <p className='precio'>Precio: <span className='valorPrecio'>$1000</span></p>
            <div className='btnComprarContainer'>
                <button className='botonComprar'>Comprar</button>
            </div>
        </div>
        
    </div>
  )
}

export default Perfume