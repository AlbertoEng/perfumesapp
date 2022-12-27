import React from 'react'

const Perfume = () => {
  return (
    <div className='product'>
        <div className='imgContainer'>
            <img className='perfume' src="imgs/one.webp" alt="" />
        </div>
        <div className='datosPerfume'>
            <h2 className='titulo--product'>Calvin Klein</h2>
            <h3>Aroma delicado por periodos largos de tiempo.</h3>
            <div className='btnComprarContainer'>
                <button className='botonComprar'>Comprar</button>
            </div>
        </div>
        
    </div>
  )
}

export default Perfume