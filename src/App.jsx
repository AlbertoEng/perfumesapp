import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className='header'>
        <h1 className='tituloApp'>Perfumes App</h1>
        <Navbar/>
      </header>
      <ItemListContainer/>
    </div>
  )
}

export default App
