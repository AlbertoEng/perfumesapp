import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Perfume from './Perfume'

const ItemListContainer = ({ state, setState}) => {

  const [productos, setProductos] = useState([]);

  const obtenerproductos = async ()=>{
    const lista = await axios.get('http://localhost:3000/items');
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
                <Link  to={`/items/${producto.id}`}>
                    <Perfume 
                      id = {producto.id}
                      src={producto.imagen}
                      nombre={producto.nombre}
                      descripcion={producto.descripcion}
                      precio={producto.precio}
                      state={state}
                      setState={setState}
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