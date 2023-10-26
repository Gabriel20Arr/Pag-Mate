import './App.css';
import { Route, Routes } from 'react-router-dom';

import Headers from './Views/Header/Headers';
import Carrusel from './Views/Carrusel/Carrusel.jsx';
import Footer from './Views/Footer/Footer';

import {AllProduct} from "./Components/AllProduct/AllProduct.jsx"
import { Yerbas } from './Components/Yerbas/Yerbas';
import { Mate } from './Components/Mate/Mate';
import { Bombillas } from './Components/Bombillas/Bombillas';


function App() {
  return (
    <div className='Container'>
      <Headers />
      <Carrusel />

      <div className="content">
        <Routes>
          <Route path='/' element={<AllProduct />} />
          <Route path='/AllProduct' element={<AllProduct />} />
          <Route path='/Yerbas' element={<Yerbas />} />
          <Route path='/Mates' element={<Mate />} />
          <Route path='/Bombillas' element={<Bombillas />} />
        </Routes>
      </div>
      
      <div className='FooterC'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

