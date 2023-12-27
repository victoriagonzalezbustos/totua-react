import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetail from './componentes/ItemDetail'
import ItemDetailContainer from './componentes/ItemDetailContainer'



const App = () => {
  return (
    <BrowserRouter>
             
              <Navbar/>
              <Routes>
                <Route exact path='/' element={<ItemListContainer />}></Route>
                <Route exact path='/product/:id' element={<ItemDetailContainer/>}></Route>
                <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
                
                
              
              
              </Routes>
    </BrowserRouter>
  )
}

export default App
