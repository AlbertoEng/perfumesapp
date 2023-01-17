import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Producto = () => {

    const [producto, setProducto] = useState({})

    const params = useParams();
    const obtenerproducto = async ()=>{
        const productoSelect = await axios.get(`http://localhost:3000/productos/${params.productoId}`);
        setProducto(productoSelect.data)

    }
  
    useEffect(()=>{
      obtenerproducto()
    },[]) 

    return (
        <>
            { producto 
                ?   <div className='producto-container'>
                        <div className='imagenProducto'>
                            <img src={`${producto.imagen}`} alt="" />
                        </div>
                        <div className='datosProducto'>
                            <h3>{`${producto.nombre}`}</h3>
                            <p>
                                {`${producto.descripcion}`}
                            </p>
                            <h2 className='precioProducto'>Price: $<span>{`${producto.precio} MXN`}</span></h2>
                            <button className='btn btn-outline-light text-primary botonAgregarCarrito'>Agregar a carrito</button>
                            <button className='btn btn-primary botonComprar'>Comprar</button>
                        </div>
                    </div>
                : <h2>no hay nada</h2>
                
            }

        </>        
    )
}

export default Producto