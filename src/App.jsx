import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Error from './components/Error/Error'
import Cart from './components/Cart/Cart'
import CartProvider from './components/CartContext/CartContext';
import Checkout from './components/Checkout/Checkout'

const App = () =>{

  return(
    <>

    <BrowserRouter>   

    <CartProvider>
      
    <NavBar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>} />

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />

        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />

        <Route path='/cart' element={<Cart/>} />

        <Route path='/checkout' element={<Checkout/>} />

        <Route path='*' element={<Error/>} />

      </Routes>

      <Footer/>

      </CartProvider>

    </BrowserRouter>

    </>

  )

}

export default App