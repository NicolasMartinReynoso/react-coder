import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import CartProvider from './contexts/cartContext';
import FormContainer from './components/FormContainer/FormContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>} />
            <Route path='/Catalogo/:CatalogoId' element={<ItemListContainer></ItemListContainer>} />
            <Route path='/Detalle/:detalleId' element={<ItemDetailContainer></ItemDetailContainer>} />
            <Route path='/Carrito' element={<Cart></Cart>} />
            <Route path='/Formulario' element={<FormContainer></FormContainer>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
