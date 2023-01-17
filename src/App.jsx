import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailsContainer from './components/ItemDetailContainer'
import Producto from './components/ItemDetailContainer'


function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="App">
        <header className='header'>
          <Link to={'/'}>
            <h1 className='tituloApp'>Perfumes App</h1>
          </Link>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path={'/catalogo' }  element={<ItemListContainer/>} />
            <Route path={'/items/:id' }  element={<ItemDetailsContainer/>} />
          </Routes>
        </header>
        
        
        <footer>
          
        </footer>
      </div>
  )
}

export default App
