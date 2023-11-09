import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Headers from './Views/Header/Headers';
import Carrusel from './Views/Carrusel/Carrusel.jsx';
import Footer from './Views/Footer/Footer';

import {AllProduct} from "./Components/AllProduct/AllProduct.jsx"
import { Yerbas } from './Components/Yerbas/Yerbas';
import { Mate } from './Components/Mate/Mate';
import { Bombillas } from './Components/Bombillas/Bombillas';
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart.jsx"
import Login from './Views/Login/Login.jsx';

function App() {
  const location = useLocation();
  
  const isLogin = location.pathname === "/login"
  const isShoppinCart = location.pathname === "/ShoppingCart"
  // const isFooter = location.pathname === "/footer"
  
  return (
    <cartContext>
      <div className='Container'>
        <div className="Headers">
          { isLogin ? null : <Headers /> }
        </div>
        <div className='Carrusel'>
          { isShoppinCart || isLogin ? null : <Carrusel />}
        </div>

        <div className="content">
          <Routes>
            <Route path='/' element={<AllProduct />} />
            <Route path='/AllProduct' element={<AllProduct />} />
            <Route path='/Yerbas' element={<Yerbas />} />
            <Route path='/Mates' element={<Mate />} />
            <Route path='/Bombillas' element={<Bombillas />} />
            {/* <Route path='/Termos' element={<Cards />} /> */}
            {/* <Route path='/Termos' element={<Card />} /> */}
            <Route path='/ShoppingCart' element={<ShoppingCart />} />

            <Route path='/login' element={ <Login />} />
          </Routes>
        </div>

        <div className='Footer'>
          {isShoppinCart || isLogin ? null : <Footer />}
        </div>
      </div>
    </cartContext>
  );
}

export default App;

