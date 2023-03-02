import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>} />
          <Route path='/Catalogo/:CatalogoId' element={<ItemListContainer></ItemListContainer>} />
          <Route path='/Detalle/:detalleId' element={<ItemDetailContainer></ItemDetailContainer>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
