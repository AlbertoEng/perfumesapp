import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Perfume from './Perfume'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const obtenerproductos = async ()=>{
    const lista = await axios.get('http://localhost:3000/productos');
    console.log(lista.data)
    setProductos(lista.data)
  }

  useEffect(()=>{
    obtenerproductos()
  },[])


  return (
    <div className='itemListContainer'>
        {
          productos.map(( producto )=>{
            return (
              <div key={producto.id}>
                <Link  to={`/producto/${producto.id}`}>
                    <Perfume 
                      src={producto.imagen}
                      nombre={producto.nombre}
                      descripcion={producto.descripcion}
                      precio={producto.precio}
                    />
                </Link>
              </div>
            )
          })
        }
    </div>
  )
}

export default ItemListContainer