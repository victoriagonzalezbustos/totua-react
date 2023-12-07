import React from 'react'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'

const App = () => {
  return (
    <div className='navbar'> 
      <Navbar/>
      <ItemListContainer saludo={"Bienvenidos a Totua"}/>
    </div>
  )
}

export default App
