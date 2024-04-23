import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/PageNotFound'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Tienda de Cafe'/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer title='Tienda de Cafe'/>}/>
          <Route path='/producto/:productoId' element={<ItemDetailContainer />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}
console.log("estoy acá")
export default App
