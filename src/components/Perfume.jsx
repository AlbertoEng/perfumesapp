import React from 'react'
import { Link } from 'react-router-dom'

const Perfume = ({ src, nombre, descripcion, precio, state, setState}) => {

  return (
    <div className='product'>
        <div className='imgContainer'>
            <img className='perfume' src={src} alt="" />
        </div>
        <div className='datosPerfume'>
            <h2 className='titulo--product'>{nombre}</h2>
            <p className='descripcion-perfume'>{ descripcion }</p>
            <p className='precio'>Precio: <span className='valorPrecio'>${precio}</span></p>
            <div className='btnComprarContainer'>
                <button className='btn btn-outline-light text-primary' to={'/carrito'}>
                  Agregar al carrito
                </button>
                <button className='btn btn-primary'>Comprar</button>
            </div>
        </div>
        
    </div>
  )
}

export default Perfume