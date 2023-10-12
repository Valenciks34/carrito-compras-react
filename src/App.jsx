import React from 'react';
import NavBar from './components/NavBar'
import CarritoPage from './pages/CarritoPage'
import ComprasPage from './pages/ComprasPage'
import ProductosProvider from './context/ProductosProvider'
import {CarritoProvider} from './context/CarritoProvider'

import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ProductosProvider>
        <CarritoProvider>
          <NavBar>

          </NavBar> 

          <div className='container'>
            <Routes>
              <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
              <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
              <Route path='/*' element={<Navigate to="/"/>}></Route>
            </Routes>
          </div>

        </CarritoProvider>

      </ProductosProvider>

    </>
  );
}

export default App;
