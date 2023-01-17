import React from 'react'

const Contacto = () => {
  return (
    <div className='containerContacto'>
      <form>
        <div>
          <input 
            type="text" 
            placeholder='Nombre'
            name='nombre'  
          />
        </div>
      </form>
    </div>
  )
}

export default Contacto