import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import Contacto from './components/Contacto'
import Producto from './components/Producto'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <header className='header'>
          <h1 className='tituloApp'>Perfumes App</h1>
          <Navbar/>
          <Routes>
            <Route path='/' element={<h1>Hola</h1>}/>
            <Route path={'/catalogo' }  element={<ItemListContainer/>} />
            <Route path={'/producto/:productoId' }  element={<Producto/>} />
          </Routes>
        </header>
        
        
        <footer>
          
        </footer>
      </div>
  )
}

export default App
